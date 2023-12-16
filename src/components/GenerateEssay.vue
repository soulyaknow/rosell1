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
                            <router-link to="/" class="block py-2 px-3 text-red-950 md:bg-transparent md:p-0 hover:bg-rose-800 hover:text-white rounded-md">Home</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="flex-grow max-w-screen-xl max-h-full flex flex-col items-center justify-between mx-auto">
            <div class="my-auto mx-auto h-96 w-full md:mt-20 p-4 bg-white rounded-2xl overflow-y-scroll">
                <h1 class="text-[25px] md:text-[30px] lg:text-[35px] text-black pb-4 text-center font-bold">Morse Code Converter</h1>
                <input type="text" v-model="inputText" class="w-full text-center h-10 rounded border border-black" placeholder="Input Text...">
                <div class="mt-4">
                    <textarea :value="outputText" id="outputText" rows="4" readonly class="w-full text-center border border-black"></textarea>
                </div>
                <div class="flex space-x-10 md:ml-4 md:mt-10 mt-4">
                    <button @click="convertToMorse" class="bg-blue-400 h-10 rounded text-white hover:bg-blue-500">Convert to Morse Code</button>
                    <button @click="convertToEnglish" class="bg-blue-400 h-10 rounded text-white hover:bg-blue-500">Convert to English</button>
                </div>
            </div>
        </div>
        <footer class="transparent rounded-lg  dark:bg-gray-800">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    2023-2024 
                </span>
                <ul class="flex flex-wrap items-center  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
import { ref } from 'vue';

const navStore = useNavarStore();

const inputText = ref('');
const outputText = ref('');

const morseCodeMapping = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', '\'': '.----.', '!': '-.-.--', '/': '-..-.',
  '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
  '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

const reverseMapping = Object.fromEntries(Object.entries(morseCodeMapping).map(([key, value]) => [value, key]));

const convertToMorse = () => {
  outputText.value = textToMorse(inputText.value.toUpperCase());
};

const convertToEnglish = () => {
  outputText.value = morseToText(inputText.value);
};

const textToMorse = (text) => {
  return text.split('').map(char => {
    return char in morseCodeMapping ? morseCodeMapping[char] : char;
  }).join(' ');
};

const morseToText = (morseCode) => {
  return morseCode.split(' ').map(code => {
    return code in reverseMapping ? reverseMapping[code] : code;
  }).join('');
};
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