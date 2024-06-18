<template>
    <div class="container">
        <div class="button-animation">
            <div v-if="!state" @click="playAnimation">
                <svg viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g id="color"></g>
                        <g id="hair"></g>
                        <g id="skin"></g>
                        <g id="skin-shadow"></g>
                        <g id="line">
                            <path fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10"
                                stroke-width="2"
                                d="M19.5816,55.6062 c0.4848,0.1782,1.0303,0.297,1.5758,0.297c0.8485,0,1.697-0.297,2.4242-0.7722l30-15.9793l0.303-0.297 c0.7879-0.7722,1.2121-1.7227,1.2121-2.7919c0-1.0692-0.4242-2.0791-1.2121-2.7919l-0.303-0.297l-30-16.0981 c-1.0909-0.8316-2.6667-1.0098-4-0.4752c-1.5152,0.594-2.4848,2.0791-2.4848,3.683v31.8397 C17.0967,53.5272,18.0664,55.0122,19.5816,55.6062z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
            <div v-else @click="playAnimation">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M11 7H8V17H11V7Z" fill="#000000"></path>
                        <path d="M13 17H16V7H13V17Z" fill="#000000"></path>
                    </g>
                </svg>
            </div>
        </div>
        <div v-if="transitions.step1" class="bg-general-create"
            :style="form?.one?.background && { 'background-color': `${form?.one?.background}` }">
        </div>
        <div v-if="transitions.step2" class="bg-general-create"
            :style="form?.two?.background && { 'background-color': `${form?.two?.background}` }">
        </div>
        <div v-if="transitions.step3" class="bg-general-create"
            :style="form?.tree?.background && { 'background-color': `${form?.tree?.background}` }">
        </div>
        <div v-if="transitions.step4" class="bg-general-create"
            :style="form?.four?.background && { 'background-color': `${form?.four?.background}` }">
        </div>
        <div v-if="transitions.step5" class="bg-general-create"
            :style="form?.five?.background && { 'background-color': `${form?.five?.background}` }">
        </div>
        <div v-if="transitions.step6" class="bg-general-create"
            :style="form?.six?.background && { 'background-color': `${form?.six?.background}` }">
        </div>
        <div v-if="transitions.step1" class="challenge-complete-create"
            :class="state ? 'animation-challenge-complete' : ''">
            <p :style="form?.one?.colorText ? { 'color': `${form?.one?.colorText}` } : { 'color': '#fff' }">COMPLETED
            </p>
            <p :style="form?.one?.colorText ? { 'color': `${form?.one?.colorText}` } : { 'color': '#fff' }">CHALLENGE!
            </p>
        </div>
        <div v-if="transitions.step2" class="sponsors-create">
            <div class="content_svg-create">
                <svg width="300" height="300" class="circle-create" :class="state ? 'animation-svg' : ''">
                    <circle r="120" cx="150" cy="150" class="progress-create"
                        :style="form?.two?.lineCircle && { 'stroke': `${form?.two?.lineCircle}` }"
                        :class="state ? 'animation-progress' : ''">
                    </circle>
                </svg>
            </div>
            <img :class="state ? 'animation-img' : ''" src="https://chgsdev.shareity.com/sponsors/1700738756631.png"
                alt="">
        </div>
        <div v-if="transitions.step3" class="donated-create">
            <p :class="state ? 'animation-text-donate' : ''"
                :style="form?.tree?.colorText ? { 'color': `${form?.tree?.colorText}` } : { 'color': '#fff' }">Donated!
            </p>
            <p :class="state ? 'animation-text-donate' : ''"
                :style="form?.tree?.colorText ? { 'color': `${form?.tree?.colorText}` } : { 'color': '#fff' }">$1</p>
            <p :class="state ? 'animation-text-donate' : ''"
                :style="form?.tree?.colorText ? { 'color': `${form?.tree?.colorText}` } : { 'color': '#fff' }">Because
            </p>
            <p :class="state ? 'animation-text-donate' : ''"
                :style="form?.tree?.colorText ? { 'color': `${form?.tree?.colorText}` } : { 'color': '#fff' }">of you
            </p>
            <div class="contend-img-create">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
                <img :class="state ? 'animation-img-donate' : ''" :src="form?.tree?.image" alt="">
            </div>
            <div class="organization-create" :class="state ? 'organization-create-animation' : ''">
                <img src="https://chgsdev.shareity.com/organization/freedom-movement-5e331f727462b.png" alt="">
            </div>
        </div>
        <div v-if="transitions.step4" class="shared-your-challenge-create">
            <div class="contend-ondas">
                <div class="onda" :class="state ? 'onda-animation' : ''"
                    :style="form?.four?.wave && { 'background-color': `${form?.four?.wave}` }"></div>
            </div>
            <p :class="state ? 'animation-shared-your-challenge' : ''"
                :style="form?.four?.colorText ? { 'color': `${form?.four?.colorText}` } : { 'color': '#fff' }">shared
                your </p>
            <p :class="state ? 'animation-shared-your-challenge' : ''"
                :style="form?.four?.colorText ? { 'color': `${form?.four?.colorText}` } : { 'color': '#fff' }">
                challenge!</p>
        </div>
        <div v-if="transitions.step5" class="actions-speak-louder-than-words-create"
            :class="state ? 'actions-speak-louder-than-words-create-animation' : ''">
            <div class="ttile-1">
                <p :class="state ? 'animation-title' : ''"
                    :style="form?.five?.colorText ? { 'color': `${form?.five?.colorText}` } : { 'color': '#fff' }">
                    actions</p>
                <p :class="state ? 'animation-title' : ''"
                    :style="form?.five?.colorText ? { 'color': `${form?.five?.colorText}` } : { 'color': '#fff' }">speak
                </p>
            </div>
            <div class="ttile-2">
                <p :class="state ? 'animation-title' : ''"
                    :style="form?.five?.colorText ? { 'color': `${form?.five?.colorText}` } : { 'color': '#fff' }">
                    louder</p>
                <p :class="state ? 'animation-title' : ''"
                    :style="form?.five?.colorText ? { 'color': `${form?.five?.colorText}` } : { 'color': '#fff' }">than
                    words</p>
            </div>
            <div :class="state ? 'main__bg-animation' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${form?.five?.bg1} 50%, ${form?.five?.bg2} 50%)` }"
                class="main__bg">
            </div>
            <div :class="state ? 'main__bg-animation' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${form?.five?.bg1} 50%, ${form?.five?.bg2} 50%)` }"
                class="main__bg layer1"></div>
            <div :class="state ? 'main__bg-animation' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${form?.five?.bg1} 50%, ${form?.five?.bg2} 50%)` }"
                class="main__bg layer2"></div>
        </div>
        <div v-if="transitions.step6" class="for-positive-change-create ">
            <div class="contend-ondas">
                <div class="onda" :class="state ? 'onda-animation-rever' : ''"
                    :style="form?.six?.wave && { 'background-color': `${form?.six?.wave}` }"></div>
            </div>
            <p :class="state ? 'for-positive-change-create-animation-text' : ''"
                :style="form?.six?.colorText ? { 'color': `${form?.six?.colorText}` } : { 'color': '#fff' }">THANKS FOR
                BEING A SPARK </p>
            <P :class="state ? 'for-positive-change-create-animation-text' : ''"
                :style="form?.six?.colorText ? { 'color': `${form?.six?.colorText}` } : { 'color': '#fff' }">FOR
                POSITIVE
            </P>
            <P :class="state ? 'for-positive-change-create-animation-text' : ''"
                :style="form?.six?.colorText ? { 'color': `${form?.six?.colorText}` } : { 'color': '#fff' }">CHANGE</P>
            <div class="for-positive-change_contend-create ">
                <img :class="state ? 'animation-for-positive-img ' : ''" :src="form?.six?.image" alt="">
            </div>

        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import './create.css'
export default {
    props: {
        transitions: {
            type: Object,
        },
        form: {
            type: Object,
        },
        state: {
            type: Boolean
        },
        playState: {
            type: Function
        }

    },
    setup(props) {
        const animation = ref(props.type)
        const transitions = ref(props.transitions)
        const form = ref(props.form)
        const state = ref(props.state)
        const playAnimation = () => {
            state.value = !state.value
        }

        onMounted(() => {
            console.log('props', props)
        })

        return {
            animation,
            transitions,
            form,
            state,
            playAnimation
        };
    },
}
</script>