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
                        <a href="#" class="block py-2 px-3 text-red-950 md:bg-transparent md:p-0 hover:bg-rose-800 hover:text-white rounded-md">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-950 md:bg-transparent md:p-0 hover:bg-rose-800 hover:text-white rounded-md">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-3 text-red-950 md:bg-transparent md:p-0 hover:bg-rose-800 hover:text-white rounded-md">Portfolio</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="flex-grow max-w-screen-xl max-h-full flex flex-col items-center justify-between mx-auto">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 w-full h-full" id="home">
                <div class="bg-transparent h-full text-red-950 md:block hidden">
                    <div class="flex flex-col mt-10 pt-20">
                        <span>Hello, I'm</span>
                        <h1 class="text-left mb-4 font-bold text-[50px] text-gradient-to-r">Rosell Mae Manulat</h1>
                        <div class="text-left  mb-4" id="about">
                            <p>
                                I am a fourth-year Information Technology student at Cordova Public College, deeply passionate about technology. 
                                Throughout my academic journey, I have actively engaged in the ever-evolving realm of programming. 
                                My experiences have provided me with a robust understanding of multiple programming languages, honed problem-solving skills, 
                                and a genuine enthusiasm for crafting effective and inventive solutions. 
                                Whether it's overcoming algorithmic hurdles or building practical applications, 
                                I take pleasure in translating concepts into operational code.
                            </p>
                        </div>
                        <button class="h-10 w-40 rounded bg-rose-400  text-white md:p-0 hover:bg-rose-800 hover:text-white font-medium text-sm px-5 py-2.5 text-center me-2 mb-2">About Me</button>
                    </div>  
                </div>
                <div class="transparent h-full md:block hidden relative">
                    <div class="sticky top-0 h-full w-full mt-16 ml-32">
                        <!-- Back image -->
                        <img src="../assets/bg.png" style="position: absolute; z-index: -1;" class="top-0 left-0 right-0 bottom-0">
                        <!-- Front image -->
                        <img src="../assets/rosell.png" style="position: absolute; z-index: 1;">                        
                    </div>
                </div>
                <div class="transparent h-full md:hidden block relative">
                    <div class="h-full w-full relative">
                        <!-- Back image -->
                        <img src="../assets/bg.png" class="h-full w-full object-cover" style="position: absolute; z-index: -1;" alt="Back Image">
                        <!-- Front image -->
                        <img src="../assets/rosell.png" class="h-full w-full object-cover" style="position: relative; z-index: 1;" alt="Front Image">                        
                    </div>
                </div>
                <div class="bg-transparent h-full text-red-950 md:hidden block">
                    <div class="flex flex-col pt-4 ml-2">
                        <span>Hello, I'm</span>
                        <h1 class="text-left font-bold text-[40px]">Rosell Mae Manulat</h1>
                        <div class="text-left mb-4" id="about">
                            <p>
                                I am a fourth-year Information Technology student at Cordova Public College, deeply passionate about technology. 
                                Throughout my academic journey, I have actively engaged in the ever-evolving realm of programming. 
                                My experiences have provided me with a robust understanding of multiple programming languages, honed problem-solving skills, 
                                and a genuine enthusiasm for crafting effective and inventive solutions. 
                                Whether it's overcoming algorithmic hurdles or building practical applications, 
                                I take pleasure in translating concepts into operational code.
                            </p>
                        </div>
                    </div>  
                </div>         
            </div>
            <div class="grid grid-cols-1 w-full h-full bg-rose-200" id="about">
                <div class="text-red-950 text-center h-full">
                    <h1 class="text-[50px]">My Hobby</h1>
                    <div class="grid grid-cols-1 gap-x-8 lg:grid-cols-3 md:grid-cols-3 md:px-20">
                        <div class="w-full h-full md:pl-10 pl-2 pt-2 text-left">
                            <span class="text-[25px]">1</span>
                            <h1 class="pb-2">Reading Books</h1>
                            <p class="py-2">
                                Books have the power to transport readers to different worlds, 
                                allowing them to escape the stresses and pressures of everyday life. 
                                Immersing oneself in a captivating story or narrative provides a mental break and offers a temporary respite.
                            </p>
                        </div>
                        <div class="w-full h-full md:pl-10 pl-2 pt-2 text-left">
                            <span class="text-[25px]">2</span>
                            <h1 class="pb-2">Travelling</h1>
                            <p class="py-2">                            
                                Traveling is the act of journeying from one place to another, typically involving the exploration of new destinations for leisure, 
                                business, or personal reasons. It encompasses a diverse range of experiences.
                            </p>
                        </div>
                        <div class="w-full h-full md:pl-10 pl-2 pt-2 text-left">
                            <span class="text-[25px]">3</span>
                            <h1 class="pb-2">Painting</h1>
                            <p class="py-2">
                                Painting is a form of visual artistic expression where pigments, often in liquid form, 
                                are applied to a surface to create a composition. 
                                Artists use various techniques and styles to convey emotions, 
                                tell stories, or capture the essence of their subjects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full">
                <div class="bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200">
                    <h1 class="text-center text-red-950 text-[50px]">
                        My Portfolio
                    </h1>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-full h-full bg-rose-200" id="portfolio">
                <div class="text-center px-10 py-10">
                    <router-link to="/todoapp">
                        <img src="../assets/todo.png" class="mx-auto h-80 rounded-2xl">
                    </router-link>
                    <p class="text-left pt-4">
                        These applications often provide a simple and user-friendly interface, 
                        making task management accessible and adaptable to various organizational styles.
                    </p>
                </div>
                <div class="text-center px-10 py-10">
                    <router-link to="/essay">
                        <img src="../assets/unnamed.png" class="mx-auto h-80 rounded-2xl">
                    </router-link>
                    <p class="text-left pt-4">
                        Morse code is a method used in telecommunication to encode text characters as 
                        standardized sequences of two different signal durations, 
                        called dots and dashes, or dits and dahs.
                    </p>
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

const navStore = useNavarStore();
</script>
<style scoped>
.visible {
  display: block !important;
}
</style>