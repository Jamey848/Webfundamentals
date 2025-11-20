import { ref } from 'vue'

const storedID = localStorage.getItem('currentUserID') // read from storage
export const currentUserID = ref(storedID || null)