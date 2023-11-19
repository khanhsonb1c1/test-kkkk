import React from 'react';
import PropTypes from 'prop-types';
import Minion from '../../../assets/image/Minion';
import InputField from '../../../components/input/InputField';
import InputFieldSelect from '../../../components/input/InputFieldSelect';
import "./style.css"
import InputCheckbox from '../../../components/input/InputCheckbox';
import SubmitButton from '../../../components/button/SubmitButton';

SignUp.propTypes = {

};

function SignUp() {
    const options_country = [
        {
            id: 1,
            name: "Country"
        }
    ];

    const options_platform = [
        {
            id: 1,
            name: "Platform"
        }
    ]

    const check_box_list = [
        {
            id: 1,
            name: " By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions.",

        },
        {
            id: 2,
            name: "I agree to receive promotional offers relating to all Gameloft games and services."
        }
    ]
    return (
        <section className='signup'>

            <div className="container">
                <div className="signup-wrap">
                    <div className="signup__image">
                        <Minion />
                    </div>
                    <div className="signup__form">
                        <div className="signup__form-wrap">
                            <div className="signup__form-title">
                                <h3>Stay in the Know!</h3>
                                <div className='signup__form-title-sub'>Don't get left behind!</div>
                            </div>

                            <div className="signup__form-body">
                                <InputField placeholder={"Name"} />
                                <InputField placeholder={"Email"} />
                                <InputFieldSelect selected={1} options={options_country} />
                                <InputFieldSelect selected={1} options={options_platform} />

                            <div className="signup__form-body-checkbox">
                                {
                                    check_box_list.map((el) => {
                                        return (
                                            <InputCheckbox label={el.name} key={el.id}/>
                                        )
                                    })
                                }
                            </div>

                            <div className="signup__form-body-button">
                                <SubmitButton title="Button"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    );
}

export default SignUp;