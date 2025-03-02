'use client'
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm, ValidationError } from '@formspree/react';
import { PrimaryButton } from "../common/buttons/Buttons";


const ChevronDown = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
)

const Loader = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3a9 9 0 1 0 9 9" /></svg>
)

export function ContactForm() {

    const [state, handleSubmit] = useForm("xyzkrjyd");

    if (state.succeeded) {
        return (
            <div className="flex flex-col justify-center gap-6 md:gap-8 p-5 rounded-xl bg-[#F3F3F3]">
                <h2 className="font-playfair font-bold text-lg md:text-3xl">
                    What Happens Next
                </h2>
                <p>
                    One of our compassionate family advisors will contact you within 24 hours to confirm your visit details or answer any initial questions you might have. We look forward to showing you our community and discussing how we can meet your loved one's unique needs.
                </p>
                <PrimaryButton theme="dark" href="/">Return to Home</PrimaryButton>
            </div>
        )
    }

    if (state.submitting) {
        return (
            <div className="grid place-items-center text-navyBlue h-full">
                <span className="animate-spin scale-150">
                    <Loader />
                </span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <Input id='fullName' required placeholder={'John Doe'} label={'Full Name'} />
            <ValidationError
                prefix="Full Name"
                field="fullName"
                errors={state.errors}
            />

            <Input id='email' required placeholder={'johndoe@example.com'} type="email" label={'Email Address'} />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />

            <Input id='phone' required placeholder={'9673457654'} type="number" label={'Phone Number'} />
            <ValidationError
                prefix="Phone Number"
                field="phone"
                errors={state.errors}
            />

            <Select label={'Reason for Inquiry'} name={'reason-for-inquiry'} />
            <ValidationError
                prefix="Reason for Inquiry"
                field="reason-for-inquiry"
                errors={state.errors}
            />

            <span className="col-span-full">
                <TextArea id='message' placeholder={'Hey there...'} label={'Message (optional)'} />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </span>

            <button type="submit" className='px-6 py-3 transition-colors min-h-[40px] grid place-items-center font-bold rounded-xl md:w-fit w-full text-base bg-navyBlue text-white text-nowrap hover:bg-skyBlue shadow-lg shadow-navyBlue/20 cursor-pointer'>
                Send
            </button>
        </form>
    )
}

function Input({ label, placeholder, required = false, id, type = 'text' }) {
    return (
        <label className="flex flex-col gap-2">
            {label}
            <input placeholder={placeholder} required={required} id={id} name={id} type={type}
                className="appearance-none px-6 py-3 rounded-lg bg-[#F3F3F3] placeholder:text-navyBlue/40 outline-none focus:border focus:border-navyBlue/60 transition-all"
            />
        </label>
    )
}

function TextArea({ label, placeholder, required = false, id, type = 'text' }) {
    return (
        <label className="flex flex-col gap-2">
            {label}
            <textarea placeholder={placeholder} required={required} id={id} name={id} type={type}
                className="appearance-none px-6 py-3 rounded-lg bg-[#F3F3F3] placeholder:text-navyBlue/40 outline-none focus:border focus:border-navyBlue/60 transition-all resize-none min-h-[100px]"
            />
        </label>
    )
}

function Select({ label, name }) {
    const values = [
        {
            label: 'Schedule a Visit',
            value: 'schedule-a-visit',
        },
        {
            label: 'Just Talk',
            value: 'just-talk',
        },
    ];

    const [selectedValue, setSelectedValue] = useState(values[0].value); // Corregido el nombre del estado
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null); // Referencia para el contenedor del desplegable

    // Cerrar el menú cuando se hace clic fuera del contenedor
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Cerrar el menú si el clic es fuera del componente
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <label className="flex flex-col gap-2 relative">
            {label}
            <div
                ref={dropdownRef}
                onClick={() => setIsOpen(!isOpen)}
                className="appearance-none bg-[#F3F3F3] px-4 text-grey-400 py-3 rounded-lg w-full max-w-[564px] outline-none"
            >
                <span className="flex items-center justify-between">
                    {values.find((v) => v.value === selectedValue)?.label}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <ChevronDown />
                    </motion.span>
                </span>
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 bg-white w-full border border-navyBlue/10 rounded-lg mt-4">
                            {values.map(({ label, value }) => (
                                <li
                                    key={value}
                                    onClick={() => {
                                        setSelectedValue(value);
                                        setIsOpen(false); // Cerrar el menú después de seleccionar
                                    }}
                                    className="cursor-pointer px-2 py-4 hover:bg-gray-100"
                                >
                                    {label}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            <select name={name} id={name} value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} className="hidden">
                {values.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </label>
    );
}