### file contact us 

```typescript
    'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation('contact');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Ambil URL dari environment variable
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzsBcD3FPy2oDwwiYT8REzqzOf5icuQgM5UN_CK1r1Rmcjy8CeMgONnt9bxMizTmjnv/exec'; 

      if (!GOOGLE_SCRIPT_URL) {
        throw new Error('Configuration error');
      }
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message
        })
      });

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(t('error'));
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl lg:max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              {t('title')}
            </h1>
            <p className="mt-1 text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex flex-col border border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10">
                <h2 className="mb-8 text-xl font-semibold text-gray-800 text-center">
                  {t('formTitle')}
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">{t('firstName')}</label>
                        <input
                          type="text"
                          name="firstName"
                          id="hs-firstname-contacts-1"
                          className="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                          placeholder={t('firstName')}
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                        />
                      </div>

                      <div>
                        <label htmlFor="hs-lastname-contacts-1" className="sr-only">{t('lastName')}</label>
                        <input
                          type="text"
                          name="lastName"
                          id="hs-lastname-contacts-1"
                          className="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                          placeholder={t('lastName')}
                          value={formData.lastName}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hs-email-contacts-1" className="sr-only">{t('email')}</label>
                      <input
                        type="email"
                        name="email"
                        id="hs-email-contacts-1"
                        autoComplete="email"
                        className="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                        placeholder={t('email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div>
                      <label htmlFor="hs-about-contacts-1" className="sr-only">{t('message')}</label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="message"
                        rows={4}
                        className="py-2.5 sm:py-3 px-4 block w-full border-2 border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                        placeholder={t('messagePlaceholder')}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                      ></textarea>
                    </div>
                  </div>

                  {status === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-sm text-green-800 font-medium">
                          {t('success')}
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="text-sm text-red-800 font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {t('sending')}
                        </>
                      ) : (
                        t('send')
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```
