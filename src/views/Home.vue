<template>
    <div class="padre">
        <div v-if="!activeFullAnimation" class="form-animation">
            <div v-if="!transitions.step1" @click="activeAnimation(1)" class="view-animation">
                <p>see full animation</p>
            </div>
            <div v-if="transitions.step1" class="form-1">
                <p class="title-form">Transition 1</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="head">Background</label>
                        <input type="color" v-model="form.one.background" value="#e66465" />
                        <p class="message-error" v-if="invalid?.one?.background">{{ invalid?.one?.background }}</p>
                    </div>

                    <div class="card-color contend-form back">
                        <label for="head">Color Text</label>
                        <input type="color" v-model="form.one.colorText" value="#e66465" />
                        <p class="message-error" v-if="invalid?.one?.colorText">{{ invalid?.one?.colorText }}</p>
                    </div>
                </div>

                <div class="center-button">
                    <button style="visibility: hidden;">Back</button>
                    <button @click="next(1)">Next</button>
                </div>
            </div>
            <div v-if="transitions.step2" class="form-1">
                <p class="title-form">Transition 2</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="head">Background</label>
                        <input v-model="form.two.background" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.two?.background">{{ invalid?.two?.background }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Line Circle</label>
                        <input v-model="form.two.lineCircle" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.two?.lineCircle">{{ invalid?.two?.lineCircle }}</p>
                    </div>
                </div>
                <div class="center-button">
                    <button @click="back(1)">Back</button>
                    <button @click="next(2)">Next</button>
                </div>
            </div>
            <div v-if="transitions.step3" class="form-1">
                <p class="title-form">Transition 3</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="">Color text</label>
                        <input v-model="form.tree.colorText" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.tree?.colorText">{{ invalid?.tree?.background }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Background</label>
                        <input v-model="form.tree.background" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.tree?.background">{{ invalid?.tree?.background }}</p>
                    </div>
                </div>

                <div class="contend-form back">
                    <div class="contend-select">
                        <label for="head">Select Images</label>
                        <div class="contend-select-image">
                            <div class="select-image" v-for="item in images" :key="item.id"
                                @click="selectImage(item, 3)">
                                <img :src="item" alt="">
                            </div>
                        </div>

                    </div>
                    <p class="message-error" v-if="invalid?.tree?.image">{{
            invalid?.tree?.image }}</p>
                </div>
                <div class="center-button">
                    <button @click="back(2)">Back</button>
                    <button @click="next(3)">Next</button>
                </div>
            </div>
            <div v-if="transitions.step4" class="form-1">
                <p class="title-form">Transition 4</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="">Color Text</label>
                        <input v-model="form.four.colorText" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.four?.background">{{ invalid?.four?.background }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Background</label>
                        <input v-model="form.four.background" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.four?.colorText">{{ invalid?.four?.colorText }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Wave Color</label>
                        <input v-model="form.four.wave" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.four?.wave">{{ invalid?.four?.wave }}</p>
                    </div>

                </div>
                <div class="center-button">
                    <button @click="back(3)">Back</button>
                    <button @click="next(4)">Next</button>
                </div>
            </div>
            <div v-if="transitions.step5" class="form-1">
                <p class="title-form">Transition 5</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="">Color Text</label>
                        <input v-model="form.five.colorText" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.five?.colorText">{{ invalid?.five?.colorText }}</p>
                    </div>
                    <div class="card-color contend-form back gradient ">
                        <label for="head">Background Gradient</label>
                        <div>
                            <input v-model="form.five.bg1" type="color" name="head" value="#e66465" />
                            <input v-model="form.five.bg2" type="color" name="head" value="#e66465" />
                        </div>
                        <p class="message-error" v-if="invalid?.five?.bg1">{{ invalid?.five?.bg1 }}</p>
                        <p class="message-error" v-if="invalid?.five?.bg2">{{ invalid?.five?.bg2 }}</p>

                    </div>
                </div>

                <div class="center-button">
                    <button @click="back(5)">Back</button>
                    <button @click="next(5)">Next</button>
                </div>
            </div>
            <div v-if="transitions.step6" class="form-1">
                <p class="title-form">Transition 6</p>
                <div class="center-card">
                    <div class="card-color contend-form back">
                        <label for="">Color Text</label>
                        <input v-model="form.six.colorText" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.six?.colorText">{{ invalid?.six?.colorText }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Background</label>
                        <input v-model="form.six.background" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.six?.background">{{ invalid?.six?.background }}</p>
                    </div>
                    <div class="card-color contend-form back">
                        <label for="head">Wave Color</label>
                        <input v-model="form.six.wave" type="color" name="head" value="#e66465" />
                        <p class="message-error" v-if="invalid?.six?.wave">{{ invalid?.six?.wave }}</p>
                    </div>

                </div>
                <div class="contend-form back">
                    <div class="contend-select">
                        <label for="head">Select Images</label>
                        <div class="contend-select-image">
                            <div class="select-image" v-for="item in images" :key="item.id"
                                @click="selectImage(item, 6)">
                                <img :src="item" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center-button">
                    <button @click="back(6)">Back</button>
                </div>
            </div>
        </div>
        <div class="container-home">
            <template v-if="activeFullAnimation">
                <div @click="activeAnimation(2)" class="view-animation back">
                    <p>Back</p>
                </div>
                <div :class="activeFullAnimation && 'rounded-effect'"></div>
            </template>
            <IphoneView>

                <General v-if="activeFullAnimation" :playState="play" :state="stateAnimation" :transitions="transitions"
                    :form="form" />
                <Create v-else :type="'create'" :playState="play" :state="stateAnimation" :transitions="transitions"
                    :form="form" />
            </IphoneView>
        </div>
    </div>

</template>
<script>
import IphoneView from '../components/Iphone/IphoneView.vue';
import General from '../components/Animaciones/General/Main.vue'
import Create from '../components/Animaciones/Create/Main.vue'
import { validationFrame } from '../validations/transition'
import { onMounted, ref, watch } from 'vue';
export default {
    components: {
        IphoneView,
        General,
        Create
    },
    setup(props) {
        const form = ref({
            one: {
                background: null,
                colorText: null,
            },
            two: {
                lineCircle: null,
                background: null,
            },
            tree: {
                colorText: null,
                background: null,
                image: null,
            },
            four: {
                colorText: null,
                background: null,
                wave: null
            },
            five: {
                colorText: null,
                bg1: null,
                bg2: null,
            },
            six: {
                colorText: null,
                background: null,
                wave: null,
                image: null,
            }
        })
        const images = {
            cartera: 'https://cdn-icons-png.flaticon.com/512/9284/9284455.png',
            moneda: 'https://cdn-icons-png.flaticon.com/512/1788/1788873.png',
            dolar: 'https://cdn-icons-png.flaticon.com/512/9382/9382185.png'
        }
        const transitions = ref({
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            step5: false,
            step6: false,
        })
        const invalid = ref();
        const stateAnimation = ref(false)
        const componentKey = ref(0)
        const activeFullAnimation = ref(false)
        const next = (step) => {
            console.log('PEPITOOOOOOOOO', step)
            activeFullAnimation.value = false
            switch (step) {
                case 1:
                    invalid.value = validationFrame(form.value, transitions.value);
                    if (Object.entries(invalid.value.one).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = true
                        transitions.value.step3 = false
                        transitions.value.step4 = false
                        transitions.value.step5 = false
                        transitions.value.step6 = false
                    }
                    break;
                case 2:
                    invalid.value = validationFrame(form.value, transitions.value);
                    if (Object.entries(invalid.value.two).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = false
                        transitions.value.step3 = true
                        transitions.value.step4 = false
                        transitions.value.step5 = false
                        transitions.value.step6 = false
                    }
                    break;
                case 3:
                    invalid.value = validationFrame(form.value, transitions.value);
                    console.log(' invalid.value', invalid.value)
                    if (Object.entries(invalid.value.tree).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = false
                        transitions.value.step3 = false
                        transitions.value.step4 = true
                        transitions.value.step5 = false
                        transitions.value.step6 = false
                    }
                    break;
                case 4:
                    invalid.value = validationFrame(form.value, transitions.value);
                    console.log(' invalid.value', invalid.value)
                    if (Object.entries(invalid.value.four).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = false
                        transitions.value.step3 = false
                        transitions.value.step4 = false
                        transitions.value.step5 = true
                        transitions.value.step6 = false
                    }
                    break;
                case 5:
                    invalid.value = validationFrame(form.value, transitions.value);
                    console.log(' invalid.value', invalid.value)
                    if (Object.entries(invalid.value.five).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = false
                        transitions.value.step3 = false
                        transitions.value.step4 = false
                        transitions.value.step5 = false
                        transitions.value.step6 = true
                    }
                    break;
                case 6:
                    invalid.value = validationFrame(form.value, transitions.value);
                    if (Object.entries(invalid.value.six).length === 0) {
                        transitions.value.step1 = false
                        transitions.value.step2 = false
                        transitions.value.step3 = false
                        transitions.value.step4 = false
                        transitions.value.step5 = false
                        transitions.value.step6 = true
                    }
                    break;
                default:
                    break;
            }
        }
        const activeAnimation = (state) => {
            state == 1 ? activeFullAnimation.value = true : activeFullAnimation.value = false
        }
        const back = (step) => {
            console.log('step', step)
            switch (step) {
                case 1:
                    transitions.value.step1 = true
                    transitions.value.step2 = false
                    transitions.value.step3 = false
                    transitions.value.step4 = false
                    transitions.value.step5 = false
                    transitions.value.step6 = false
                    break;
                case 2:
                    transitions.value.step1 = false
                    transitions.value.step2 = true
                    transitions.value.step3 = false
                    transitions.value.step4 = false
                    transitions.value.step5 = false
                    transitions.value.step6 = false
                    break;
                case 3:
                    transitions.value.step1 = false
                    transitions.value.step2 = false
                    transitions.value.step3 = true
                    transitions.value.step4 = false
                    transitions.value.step5 = false
                    transitions.value.step6 = false
                    break;
                case 4:
                    transitions.value.step1 = false
                    transitions.value.step2 = false
                    transitions.value.step3 = true
                    transitions.value.step4 = false
                    transitions.value.step5 = false
                    transitions.value.step6 = false
                    break;
                case 5:
                    transitions.value.step1 = false
                    transitions.value.step2 = false
                    transitions.value.step3 = false
                    transitions.value.step4 = true
                    transitions.value.step5 = false
                    transitions.value.step6 = false
                    break;
                case 6:
                    transitions.value.step1 = false
                    transitions.value.step2 = false
                    transitions.value.step3 = false
                    transitions.value.step4 = false
                    transitions.value.step5 = true
                    transitions.value.step6 = false
                    break;
                default:
                    break;
            }
        }
        const selectImage = (img, step) => {
            switch (step) {
                case 3:
                    form.value.tree.image = img
                    break;
                case 6:
                    form.value.six.image = img
                    break;
                default:
                    break;
            }
        }
        const play = () => {
            stateAnimation.value = !stateAnimation.value
        }
        return {
            transitions,
            next,
            back,
            form,
            images,
            selectImage,
            activeFullAnimation,
            activeAnimation,
            stateAnimation,
            play,
            invalid
        };
    },
}
</script>