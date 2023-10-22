"use client";

import { useState } from "react";
import "./SwitchButton.css";

function SwitchButton({ setChecked }) {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="">
            <div className=" flex flex-col items-center  overflow-hidden">
                <div className="flex">
                    <label className="inline-flex relative items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={enabled}
                            readOnly
                        />
                        <div
                            onClick={() => {
                                setEnabled(!enabled);
                            }}
                            className="w-20 h-6  bg-[#D5073C] rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-[3.75rem] peer-checked:after:border-2 peer-checked:after:border-[#0F7C35] peer-checked:after:bg-white after:content-[''] after:absolute after:top-0.5 after:left-[] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#64F095] "
                        >
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SwitchButton;