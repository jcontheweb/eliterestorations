import React from 'react'

import Header from './Header'
import Footer from './Footer'
import BookAppointment from '../BookAppointment'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <div className="fixed right-0 z-20 hidden mr-4 shadow-xl lg:flex top-menu lg:mt-4">
                <BookAppointment />
            </div>
            <div className="fixed inset-x-0 bottom-0 z-20 p-2 bg-white border-t shadow-upper lg:hidden">
                <BookAppointment />
            </div>
        </div>
    )
}