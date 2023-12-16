<template>
    <div class="min-h-screen w-screen flex flex-col bg-gradient-to-r from-rose-50 via-rose-100 to-rose-100">
        <nav class="bg-transparent">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:border-b-2 border-red-950">
                <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../assets/rm1.png" class="h-10 w-20">
                </div>
                <button @click="navStore.showNavar"
                data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-red-950 hover:text-rose-200 focus:outline-none">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default"
                :class="{ visible: navStore.navarState }">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
                        <li>
                            <router-link to="/" class="block py-2 px-3 text-red-950 md:bg-transparent md:p-0">Home</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="flex-grow max-w-screen-xl max-h-full flex flex-col items-center justify-between mx-auto">
            <div class="my-auto mx-auto h-96 md:w-[350px] w-full md:mt-20 p-4 bg-white rounded-2xl overflow-y-scroll">
                <h1 class="text-[25px] md:text-[30px] lg:text-[35px] text-red-950 pb-4 font-bold">Todo App</h1>
                <div class="flex items-center space-x-2 mb-4">
                    <input type="text" class="border border-gray-300 p-2 rounded-md w-full" v-model="task" placeholder="Add a new task" />
                    <button class="bg-violet-700 text-white px-4  rounded-md text-[25px] h-10" @click="addTask">+</button>
                </div>
                <input type="text" class="border border-gray-300 p-2 rounded-md w-full mb-4" placeholder="Search tasks" v-model="searchQuery"/>
                <div class="flex flex-col mb-4">
                    <div class="flex mb-2 items-center header w-full h-10 bg-gradient-to-r from-rose-50 via-rose-100 to-rose-100 text-red-950 text-center">
                        <p class="flex-1 py-6">Details</p>
                        <p class="flex-1 py-6">Action</p>
                    </div>
                    <div class="flex items-center header h-full w-full bg-white text-gray-400 text-center" v-for="todo in filteredTodos" :key="todo.id">
                        <div class="datas flex w-full h-full py-2 bg-gray-200 text-slate-950">
                            <p class="flex-1 text-[20px]" :class="{ check: todo.status }">{{ capitalizeFirstLetter(todo.details) }}</p>
                            <p class="flex-1">
                                <a href="#" class="mx-2" @click="updateData(todo.id, todo.status)">
                                    <i class="bi bi-pencil-square text-[20px]"></i>
                                </a>
                                <a href="#" @click="removeTask(todo.id)">
                                    <i class="bi bi-trash3 text-[20px]"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex mt-4 text-center bg-white">
                    <button class="items-center header w-full h-10 bg-violet-600 text-white text-center" 
                        v-if="hasTasks" @click="clearAllTasks">
                        Clear All
                    </button>
                </div>
            </div>
        </div>
        <footer class="transparent rounded-lg  my-4 dark:bg-gray-800">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    2023-2024 
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script setup>
import { useNavarStore } from '../stores/';
import { db } from '../firebase';
import { ref, onMounted, computed } from 'vue';
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query, doc, deleteDoc, updateDoc, getDocs } from 'firebase/firestore';

const navStore = useNavarStore();
const task = ref('');
const todos = ref([]);
const searchQuery = ref('');
const status = ref(false);

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const addTask = async (e) => {
      e.preventDefault();
      try {
        await addDoc(collection(db, 'todo'), {
          details: task.value,
          status: status.value,
          date_created: serverTimestamp(),
        });
        task.value = '';
      } catch (e) {
        console.error('Error adding document: ', e);
      }
};

const getData = () => {
      const fsquery = query(collection(db, "todo"), orderBy('date_created','asc'));
      onSnapshot(fsquery,(querySnapshot) => {
        const newTasks = [];
        querySnapshot.forEach((doc) => {
          const datas = {
              id:doc.id,
              details:doc.data().details,
              status:doc.data().status,
            }
            newTasks.unshift(datas);
        });
        todos.value=newTasks;
      })
};

const updateData = (id, currentStatus) => {
      const fsquery = doc(db, 'todo', id);
      const newData = {
        status: !currentStatus,
      }
      updateDoc(fsquery, newData)
      .then(() => {
        console.log('Document successfully updated.');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
};

const removeTask = async (id) => {
      try{
        await deleteDoc(doc(db,'todo',id))
      }catch(e){
        console.log(e);
      }
};

const hasTasks = computed(()=> {
      return todos.value.length > 0;
});

const clearAllTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'todo'));
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        todos.value = [];
      } catch (e) {
        console.log(e);
      }
};
const filteredTodos = computed(()=> {
      return todos.value.filter(todo => {
        return todo.details.toLowerCase().includes(searchQuery.value.toLowerCase());
      });
});

onMounted(()=> {
      getData()
})
</script>
<style scoped>
.visible {
  display: block !important;
}
.overflow-y-scroll::-webkit-scrollbar {
    display: none;
    width: 0px;
  }
  .overflow-y-scroll:hover::-webkit-scrollbar {
    display: block;
  }
  .overflow-y-scroll::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .overflow-y-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(8, 47, 73, 1);
    border-radius: 8px;
    width: 4px;
  } 
  .check {
    text-decoration: line-through;
    color: rgb(151, 151, 151);
  }
</style>