'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: { [key: string]: string } = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = 'Invalid email address'
        if (!formData.message.trim())
            newErrors.message = 'Please describe your challenges'

        setErrors(newErrors)
        if (Object.keys(newErrors).length > 0) return

        setIsSubmitting(true)

        try {
            const response = await fetch('https://formspree.io/f/xldlrvvj', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: '',
                })
                setErrors({})
            }
        } catch (error) {
            console.error('Error submitting form:', error)
        }

        setIsSubmitting(false)
    }

    if (isSubmitted) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center px-4'>
                <div className='max-w-md w-full bg-muted rounded-2xl shadow-2xl p-8 text-center'>
                    <div className='w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6'>
                        <svg
                            className='w-8 h-8 text-secondary'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M5 13l4 4L19 7'
                            />
                        </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-primary mb-4'>
                        Thank You!
                    </h2>
                    <p className='text-secondary mb-6'>
                        We've received your request and will get back to you
                        within 24 hours to schedule your free audit call.
                    </p>
                    <Link
                        href='/'
                        className='btn-primary inline-flex items-center gap-2 text-muted'
                    >
                        <ArrowLeft className='w-4 h-4 text-muted' />
                        Back to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-primary via-secondary to-primary'>
            {/* Header */}
            <header className='bg-muted shadow-sm border-b border-accent/40'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='flex items-center'>
                            <Image
                                src='/logo.png'
                                alt='Axomations Logo'
                                width={240}
                                height={40}
                                className='h-auto'
                            />
                        </div>
                        <Link
                            href='/'
                            className='text-primary hover:text-secondary transition-colors flex items-center gap-2'
                        >
                            <ArrowLeft className='w-4 h-4' />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='px-6 py-12'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    {/* Contact Info */}
                    <div className='space-y-8'>
                        <div>
                            <h1 className='text-4xl md:text-5xl font-bold text-muted mb-6'>
                                Let's Automate Your Business
                            </h1>
                            <p className='text-xl text-muted/80 leading-relaxed'>
                                Ready to reclaim your time and scale your
                                business? Tell us about your challenges and
                                we'll show you exactly how automation can
                                transform your operations.
                            </p>
                        </div>

                        <div className='space-y-6'>
                            {[
                                {
                                    label: 'Email',
                                    icon: Mail,
                                    text: 'contact@axomations.com',
                                },
                                {
                                    label: 'Response Time',
                                    icon: Phone,
                                    text: 'Within 24 hours',
                                },
                                {
                                    label: 'Free Audit Call',
                                    icon: MapPin,
                                    text: '30-minute strategy session',
                                },
                            ].map(({ label, icon: Icon, text }) => (
                                <div
                                    className='flex items-center gap-4'
                                    key={label}
                                >
                                    <div className='w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center'>
                                        <Icon className='w-6 h-6 text-accent' />
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-muted'>
                                            {label}
                                        </h3>
                                        <p className='text-muted/80'>{text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='bg-muted/10 backdrop-blur-sm rounded-2xl p-6 border border-muted/20'>
                            <h3 className='text-xl font-bold text-muted mb-3'>
                                What to Expect
                            </h3>
                            <ul className='space-y-2 text-muted/80'>
                                {[
                                    'Analysis of your current processes',
                                    'Identification of automation opportunities',
                                    'Custom strategy roadmap',
                                    'ROI projections and timeline',
                                ].map((item, index) => (
                                    <li
                                        className='flex items-start gap-2'
                                        key={index}
                                    >
                                        <span className='text-primary mt-1'>
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-muted shadow-xl border border-accent/30 rounded-2xl p-8'>
                        <h2 className='text-2xl font-bold text-primary mb-6'>
                            Book Your Free Audit Call
                        </h2>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {[
                                    {
                                        name: 'name',
                                        label: 'Full Name *',
                                        placeholder: 'John Doe',
                                        type: 'text',
                                    },
                                    {
                                        name: 'email',
                                        label: 'Email Address *',
                                        placeholder: 'john@company.com',
                                        type: 'email',
                                    },
                                ].map(({ name, label, placeholder, type }) => (
                                    <div key={name}>
                                        <label
                                            htmlFor={name}
                                            className='block text-sm font-medium text-primary mb-2'
                                        >
                                            {label}
                                        </label>
                                        <input
                                            id={name}
                                            name={name}
                                            type={type}
                                            value={
                                                formData[
                                                    name as keyof typeof formData
                                                ]
                                            }
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white bg-opacity-30 border rounded-lg text-primary placeholder-primary/50 focus:ring-2 focus:ring-accent focus:outline-none ${
                                                errors[name]
                                                    ? 'border-accent text-accent'
                                                    : 'border-primary/40'
                                            }`}
                                            placeholder={placeholder}
                                        />
                                        {errors[name] && (
                                            <p className='mt-1 text-sm text-secondary'>
                                                {errors[name]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {[
                                    {
                                        name: 'company',
                                        label: 'Company Name',
                                        placeholder: 'Your Company',
                                        type: 'text',
                                    },
                                    {
                                        name: 'phone',
                                        label: 'Phone Number',
                                        placeholder: '+1 (555) 123-4567',
                                        type: 'tel',
                                    },
                                ].map(({ name, label, placeholder, type }) => (
                                    <div key={name}>
                                        <label
                                            htmlFor={name}
                                            className='block text-sm font-medium text-primary mb-2'
                                        >
                                            {label}
                                        </label>
                                        <input
                                            id={name}
                                            name={name}
                                            type={type}
                                            value={
                                                formData[
                                                    name as keyof typeof formData
                                                ]
                                            }
                                            onChange={handleChange}
                                            className='w-full px-4 py-3 bg-white bg-opacity-30 border border-primary/40 text-primary placeholder-primary/50 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none'
                                            placeholder={placeholder}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-primary mb-2'
                                >
                                    Tell us about your business challenges *
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white bg-opacity-30 border rounded-lg text-primary placeholder-primary/50 focus:ring-2 focus:ring-accent focus:outline-none resize-none ${
                                        errors.message
                                            ? 'border-accent text-accent'
                                            : 'border-primary/40'
                                    }`}
                                    placeholder="Describe your current processes, pain points, and what you'd like to automate..."
                                />
                                {errors.message && (
                                    <p className='mt-1 text-sm text-secondary'>
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full btn-primary text-muted flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className='w-4 h-4 border-2 border-accent/30 border-t-white rounded-full animate-spin' />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className='w-4 h-4' />
                                        Submit Request
                                    </>
                                )}
                            </button>
                        </form>

                        <p className='text-sm text-primary/70 mt-4 text-center'>
                            We respect your privacy. Your information will only
                            be used to contact you about your automation needs.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}
