import React from 'react';
import Image from 'next/image';
import Notfound from '@/app/assets/images/not-found.jpg';
import './style.css';
export default function notfound() {
    return (
        <div className="notfound">
            <Image src={Notfound} alt="not found" />
        </div>
    )
}
