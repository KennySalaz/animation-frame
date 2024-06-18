<template>
    <div class="container">
        <div v-if="dataFrame?.one?.background" class="bg-general-create"
            :style="dataFrame?.one?.background && { 'background-color': `${dataFrame?.one?.background}` }">
        </div>
        <div v-if="dataFrame?.two?.background" class="bg-general-create"
            :style="dataFrame?.two?.background && { 'background-color': `${dataFrame?.two?.background}` }">
        </div>
        <div v-if="dataFrame?.tree?.background" class="bg-general-create"
            :style="dataFrame?.tree?.background && { 'background-color': `${dataFrame?.tree?.background}` }">
        </div>
        <div v-if="dataFrame?.four?.background" class="bg-general-create"
            :style="dataFrame?.four?.background && { 'background-color': `${dataFrame?.four?.background}` }">
        </div>
        <!-- F    R    A     M     E     1  -->
        <div v-if="dataFrame.one.active" class="challenge-complete">
            <p :style="dataFrame?.one?.colorText ? { 'color': `${dataFrame?.one?.colorText}` } : { 'color': '#fff' }">
                CHALLENGE
            </p>
            <p :style="dataFrame?.one?.colorText ? { 'color': `${dataFrame?.one?.colorText}` } : { 'color': '#fff' }">
                COMPLETED!
            </p>
        </div>
        <!-- F    R    A     M     E     2  -->
        <div v-if="dataFrame.two.active" class="sponsors">
            <div class="content_svg">
                <svg width="300" height="300" class="circle">
                    <circle r="120" cx="150" cy="150" class="progress"
                        :style="form?.two?.lineCircle && { 'stroke': `${form?.two?.lineCircle}` }"></circle>
                </svg>
            </div>
            <img src="https://chgsdev.shareity.com/sponsors/1700738756631.png" alt="">
        </div>
        <!-- F    R    A     M     E     3  -->
        <div v-if="dataFrame.tree.active" class="donated">
            <p :style="dataFrame?.tree?.colorText ? { 'color': `${dataFrame?.tree?.colorText}` } : { 'color': '#fff' }">
                Donated!</p>
            <p :style="dataFrame?.tree?.colorText ? { 'color': `${dataFrame?.tree?.colorText}` } : { 'color': '#fff' }">
                $1</p>
            <p :style="dataFrame?.tree?.colorText ? { 'color': `${dataFrame?.tree?.colorText}` } : { 'color': '#fff' }">
                Because</p>
            <p :style="dataFrame?.tree?.colorText ? { 'color': `${dataFrame?.tree?.colorText}` } : { 'color': '#fff' }">
                of you</p>
            <div class="contend-img">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
                <img :src="dataFrame?.tree?.image" alt="">
            </div>
            <div class="organization">
                <img src="https://chgsdev.shareity.com/organization/freedom-movement-5e331f727462b.png" alt="">
            </div>
        </div>
        <!-- F    R    A     M     E     4  -->
        <div v-if="dataFrame?.four.active" class="shared-your-challenge">
            <div v-if="dataFrame?.four?.wave" class="contend-ondas-bg">
                <div class="onda-bg onda-animation-bg"
                    :style="dataFrame?.four?.wave && { 'background-color': `${dataFrame?.four?.wave}` }"></div>
            </div>
            <p :style="dataFrame?.four?.colorText ? { 'color': `${dataFrame?.four?.colorText}` } : { 'color': '#fff' }">
                shared
                your </p>
            <p :style="dataFrame?.four?.colorText ? { 'color': `${dataFrame?.four?.colorText}` } : { 'color': '#fff' }">
                challenge!
            </p>

        </div>
        <!-- F    R    A     M     E     5  -->
        <div v-if="dataFrame?.five?.active" class="actions-speak-louder-than-words-gradiend">
            <div class="ttile-1">
                <p
                    :style="dataFrame?.five?.colorText ? { 'color': `${dataFrame?.five?.colorText}` } : { 'color': '#fff' }">
                    actions</p>
                <p
                    :style="dataFrame?.five?.colorText ? { 'color': `${dataFrame?.five?.colorText}` } : { 'color': '#fff' }">
                    speak</p>
            </div>
            <div class="ttile-2">
                <p
                    :style="dataFrame?.five?.colorText ? { 'color': `${dataFrame?.five?.colorText}` } : { 'color': '#fff' }">
                    louder</p>
                <p
                    :style="dataFrame?.five?.colorText ? { 'color': `${dataFrame?.five?.colorText}` } : { 'color': '#fff' }">
                    than words</p>
            </div>
            <div :class="dataFrame?.five?.bg1 || dataFrame?.five?.bg2 ? 'main__bg-animation-gradiend' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${dataFrame?.five?.bg1} 50%, ${dataFrame?.five?.bg2} 50%)` }"
                class="main__bg-gradiend">
            </div>
            <div :class="dataFrame?.five?.bg1 || dataFrame?.five?.bg2 ? 'main__bg-animation-gradiend' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${dataFrame?.five?.bg1} 50%, ${dataFrame?.five?.bg2} 50%)` }"
                class="main__bg-gradiend layer1-gradiend"></div>
            <div :class="dataFrame?.five?.bg1 || dataFrame?.five?.bg2 ? 'main__bg-animation-gradiend' : ''"
                :style="{ 'backgroundImage': `linear-gradient(-60deg, ${dataFrame?.five?.bg1} 50%, ${dataFrame?.five?.bg2} 50%)` }"
                class="main__bg-gradiend layer2-gradiend"></div>
        </div>
        <!-- F    R    A     M     E     6  -->
        <div v-if="dataFrame.six.active" class="for-positive-change-positive">
            <div class="contend-ondas-bg-positive">
                <div class="onda-bg-positive onda-animation-rever-positive"
                    :style="dataFrame?.six?.wave && { 'background-color': `${dataFrame?.six?.wave}` }"></div>
            </div>
            <p :style="dataFrame?.six?.colorText ? { 'color': `${dataFrame?.six?.colorText}` } : { 'color': '#fff' }">
                THANKS FOR BEING A SPARK </p>
            <P :style="dataFrame?.six?.colorText ? { 'color': `${dataFrame?.six?.colorText}` } : { 'color': '#fff' }">
                FOR POSITIVE</P>
            <P :style="dataFrame?.six?.colorText ? { 'color': `${dataFrame?.six?.colorText}` } : { 'color': '#fff' }">
                CHANGE</P>
            <div class="for-positive-change_contend-positive">
                <img :src="dataFrame?.six?.image" alt="">
            </div>
        </div>
    </div>

</template>
<script>
import { onMounted, ref } from 'vue';
import './general.css'
export default {
    props: {
        transitions: {
            type: Object,
        },
        form: {
            type: Object,
        },

    },
    setup(props) {
        const animation = ref(props.type)
        const transitions = ref(props.transitions)
        const form = ref(props.form)
        const state = ref(false)
        const play = () => {
            state.value = !state.value
        }
        const dataFrame = ref({
            one: {},
            two: {},
            tree: {},
            four: {},
            five: {},
            six: {}

        })
        onMounted(() => {
            console.log('form.value', form.value)
            //FRAME 1
            dataFrame.value.one.background = form.value.one.background ? form.value.one.background : null;
            dataFrame.value.one.colorText = form.value.one.colorText ? form.value.one.colorText : null;
            //FRAME 2
            dataFrame.value.two.lineCircle = form.value.two.lineCircle ? form.value.two.lineCircle : null;
            dataFrame.value.two.background = form.value.two.background ? form.value.two.background : null;
            //FRAME 3
            dataFrame.value.tree.colorText = form.value.tree.colorText ? form.value.tree.colorText : null;
            dataFrame.value.tree.background = form.value.tree.background ? form.value.tree.background : null;
            dataFrame.value.tree.image = form.value.tree.image ? form.value.tree.image : null;
            //FRAME 4
            dataFrame.value.four.colorText = form.value.four.colorText ? form.value.four.colorText : null;
            dataFrame.value.four.background = form.value.four.background ? form.value.four.background : null;
            dataFrame.value.four.wave = form.value.four.wave ? form.value.four.wave : null;
            //FRAME 5
            dataFrame.value.five.colorText = form.value.five.colorText ? form.value.five.colorText : null;
            dataFrame.value.five.bg1 = form.value.five.bg1 ? form.value.five.bg1 : null;
            dataFrame.value.five.bg2 = form.value.five.bg2 ? form.value.five.bg2 : null;
            //FRAME 6
            dataFrame.value.six.colorText = form.value.six.colorText ? form.value.six.colorText : null;
            dataFrame.value.six.wave = form.value.six.wave ? form.value.six.wave : null;
            dataFrame.value.six.background = form.value.six.background ? form.value.six.background : null;
            dataFrame.value.six.image = form.value.six.image ? form.value.six.image : null;

            dataFrame.value.one.active = !Object.values(dataFrame.value.one).every(o => o === null);
            dataFrame.value.two.active = !Object.values(dataFrame.value.two).every(o => o === null);
            dataFrame.value.tree.active = !Object.values(dataFrame.value.tree).every(o => o === null);
            dataFrame.value.four.active = !Object.values(dataFrame.value.four).every(o => o === null);
            dataFrame.value.five.active = !Object.values(dataFrame.value.five).every(o => o === null);
            dataFrame.value.six.active = !Object.values(dataFrame.value.six).every(o => o === null);
            console.log('data animation', dataFrame.value)
        })

        return {
            animation,
            transitions,
            form,
            play,
            state,
            dataFrame
        };
    },
}
</script>