import { useState } from 'react'
import FormPersonalData from './FormPersonalData/FormPersonalData';
import FormCareerData from './FormCareerData/FormCareerData';
import FormOtherData from './FormOtherData/FormOtherData';
import FormSkillsData from './FormSkillsData/FormSkillsData';
import BasicButton from '../../Shared/BasicButton/BasicButton';

const StudentForm = () => {

    const inicialForm = {userName: '',
    name: '',
    lastname: '',
    email: '',
    legajo: '',
    docType: '',
    docNumber: '',
    birthdate: '',
    civilStatus: '',
    cuil: '',
    sex: '',
    street: '',
    streetNumber: '',
    floor: '',
    city: '',
    province: '',
    country: '',
    telephone: '',
    career: '',
    approvedSubjects: '',
    studyProgram: '',
    currentCareerYear: '',
    turn: '',
    average: '',
    averageWithFails: '',
    CareerTitle: '',
    secondaryDegree: '',
    curriculumVitae: '',
    observations: '',
    skills: [],
        
    }
   
    const [form, setForm] = useState(inicialForm);

    const [step, setStep] = useState(1);

    const stepForwardHandler = (data) => {
        setForm({ ...form, ...data });
        setStep(step => step + 1);
    };

    const stepBackHandler = () => {
        setStep(step => step - 1);
    };

    return (

        <div>
            <form>

                {step === 1 && <FormPersonalData stepForwardHandler={stepForwardHandler} form={form} setForm={setForm}/>}
                {step === 2 && <FormCareerData stepForwardHandler={stepForwardHandler} stepBackHandler={stepBackHandler} form={form} />}
                {step === 3 && <FormOtherData stepForwardHandler={stepForwardHandler} stepBackHandler={stepBackHandler} />}
                {step === 4 && <FormSkillsData stepBackHandler={stepBackHandler} />}

                {console.log(form)}

            </form>

            <div>
                {step === 4 ? <BasicButton buttonName={'Guardar'} /> : null}
            </div>

        </div>
    )
}

export default StudentForm
