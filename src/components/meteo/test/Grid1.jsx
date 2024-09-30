import { GiSunrise, GiSunset } from "react-icons/gi";

export default function Grid1({ data }) {

    function newFormatTime(timestamp) {
        const formattedTime = new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        return formattedTime;
    }

    return (
        <div className="border border-border p-3 w-80 aspect-square flex flex-col justify-center items-center gap-2">
            <GiSunrise size={30}/>
            <p>Lever du soleil:</p>
            <p>{newFormatTime(data.sys.sunrise)}</p>
            <div className="h-[1px] w-full bg-border rounded-full"></div>
            <GiSunset size={30}/>
            <p>Coucher du soleil:</p>
            <p>{newFormatTime(data.sys.sunset)}</p>
        </div>
    );
}
