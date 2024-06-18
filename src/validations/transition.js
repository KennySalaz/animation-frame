export const validationFrame = (form, frame) => {
    console.log('form validationes', form)
    console.log('frame validationes', frame)
    let error = {
        one: {},
        two: {},
        tree: {},
        four: {},
        five: {},
        six: {}
    };
    if (frame.step1) {
        if (!form.one.background) {
            error.one.background = 'Required'
        }
        if (!form.one.colorText) {
            error.one.colorText = 'Required'
        }
    }
    if (frame.step2) {
        if (!form.two.background) {
            error.two.background = 'Required'
        }
        if (!form.two.lineCircle) {
            error.two.lineCircle = 'Required'
        }
    }
    if (frame.step3) {
        if (!form.tree.colorText) {
            error.tree.colorText = 'Required'
        }
        if (!form.tree.background) {
            error.tree.background = 'Required'
        }
        if (!form.tree.image) {
            error.tree.image = 'Required'
        }
    }
    if (frame.step4) {
        if (!form.four.background) {
            error.four.background = 'Required'
        }
        if (!form.four.colorText) {
            error.four.colorText = 'Required'
        }
        if (!form.four.wave) {
            error.four.wave = 'Required'
        }
    }
    if (frame.step5) {
        if (!form.five.bg1) {
            error.five.bg1 = 'Required'
        }
        if (!form.five.bg2) {
            error.five.bg2 = 'Required'
        }
        if (!form.five.colorText) {
            error.five.colorText = 'Required'
        }
    }
    if (frame.step6) {
        if (!form.six.background) {
            error.six.background = 'Required'
        }
        if (!form.six.colorText) {
            error.six.colorText = 'Required'
        }
        if (!form.six.wave) {
            error.six.wave = 'Required'
        }
        if (!form.six.image) {
            error.six.image = 'Required'
        }
    }
    return error;
};

