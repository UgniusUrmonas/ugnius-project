"use client"
import {SessionProvider} from "next-auth/react"

export function Body(props: {children: React.ReactNode}) {
    const{ children } = props

    return (
        <SessionProvider>
            <body>
            <div className="bg-danger-subtle text-danger">
            <div className="container p-5">
                <h1 className="display-4"><b>Ugniaus Puslapis</b></h1>
                <p className="lead">Čia yra miestų lentelė.</p>
                {children}
            </div>
        </div>
        </body>
        </SessionProvider>
    )
}