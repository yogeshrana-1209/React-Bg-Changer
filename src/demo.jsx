

function Demo() {
    return (
        <>
            <div className="text-3xl text-center pt-20 font-bold font-serif">
                <h1><strong>React Background Changer</strong></h1>
            </div>

            <div className="max-w-lg mx-auto p-8">
                <details className="open:bg-white dark:open:bg-neutral-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                    <summary className="text-sm leading-6 text-gray-900 dark:text-white font-semibold select-none">
                        Fully Responsive BG Changer
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-gray-600 dark:text-neutral-400">
                        <p>Developed By : Yogesh Rana</p>
                        <p>Last Updated On : 16/09/2025</p>
                        <p>Last Deploy On : 16/09/2025 v-0.0.1</p>
                    </div>
                </details>
            </div>

        </>

    )
}

export default Demo
