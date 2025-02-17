"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const UserCard = ({ profilePic, name, role, department, isSelected, onClick }) => {
    return (
        <div 
            className={`w-80 h-24 ${isSelected ? 'bg-violet-100' : 'bg-white'} rounded-xl border border-gray-200 cursor-pointer transition-all duration-200 mb-3 hover:shadow-lg transform hover:-translate-y-1`}
            onClick={onClick}
        >
            <div className="flex items-center m-3 p-1">
                <div className="relative w-14 h-14 mr-4">
                    <Image 
                        src={profilePic} 
                        alt={name} 
                        fill
                        className="rounded-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
                    <div className="flex flex-row gap-2 items-center">
                        <p className="text-sm text-gray-600 font-medium">{role}</p>
                        <div className="h-4 w-[1px] bg-gray-300"></div>
                        <p className="text-sm text-gray-500">{department}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Users = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const users = [
        { id: 1, profilePic: '/logo.jpg', name: 'John Doe', role: 'Intern', department: 'Development' },
        { id: 2, profilePic: '/logo.jpg', name: 'Jane Smith', role: 'Product Manager', department: 'Product' },
        { id: 3, profilePic: '/logo.jpg', name: 'Emily Johnson', role: 'Designer', department: 'Design' }
    ];

    return (
        <div className="   sm:px-4  px-1">
            <div className="flex flex-col flex-wrap justify-center gap-6">
                {users.map(user => (
                    <UserCard 
                        key={user.id}
                        {...user}
                        isSelected={selectedCard === user.id}
                        onClick={() => setSelectedCard(selectedCard === user.id ? null : user.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;