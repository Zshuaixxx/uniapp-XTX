import {ref} from 'vue'
import XtxGuess from '../components/XtxGuess.vue'
export const useGuessList=()=>{
	const guessRef=ref<InstanceType<typeof XtxGuess>>()
	const lowFresh=()=>{
		console.log('触底了')
		guessRef.value.Homepage++;
		guessRef.value?.getGuessList(guessRef.value.Homepage,guessRef.value.HomepageSize)
	}
	return {
		guessRef,
		lowFresh
	}
}