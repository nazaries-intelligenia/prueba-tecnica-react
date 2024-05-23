import { CounterModel } from "../models/counter.model";
import { CounterProvider } from "./counter-provider.component";


export const FancyCounter = () => {
    return (
        <CounterProvider
            render={({ count, increment, decrement}: CounterModel) => {
                return <div
                    className="flex flex-col gap-1">
                    <label htmlFor="counterInput"
                        className="pl-1 text-sm text-slate-700 dark:text-slate-300">Items(s)</label>
                    <div className="flex items-center">
                        <button
                            onClick={decrement}
                            className="flex h-10 items-center justify-center rounded-l-xl border border-slate-300 bg-slate-100 px-4 py-2 text-slate-700 hover:opacity-75 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:opacity-100 active:outline-offset-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:focus-visible:outline-blue-600"
                            aria-label="subtract">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                                stroke="currentColor" fill="none" strokeWidth="2" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
                            </svg>
                        </button>
                        <input readOnly value={count} id="counterInput" type="text"
                            className="border-x-none h-10 w-20 rounded-none border-y border-slate-300 bg-slate-100/50 text-center text-black focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus-visible:outline-blue-600"
                        />
                        <button
                            onClick={increment}
                            className="flex h-10 items-center justify-center rounded-r-xl border border-slate-300 bg-slate-100 px-4 py-2 text-slate-700 hover:opacity-75 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:opacity-100 active:outline-offset-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:focus-visible:outline-blue-600"
                            aria-label="add">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"
                                stroke="currentColor" fill="none" strokeWidth="2" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                        </button>
                    </div>
                </div>
            }}
        />
    )
}
