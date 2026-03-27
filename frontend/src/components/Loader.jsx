import React, { useEffect, useState } from 'react'

function Loader() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])
    return (
        <div>
            {
                loading ? (
                    <div className="absolute top-0 left-0 z-40 w-full flex items-center justify-center h-screen bg-slate-900">
                        <div className="">
                            <div className="w-16 h-16 border-4 border-blue-400 rounded-full animate-ping absolute"></div>
                            <div className="w-16 h-16 border-4 border-blue-500 rounded-full"></div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}

export default Loader
