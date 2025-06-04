import { useEffect, useRef } from "react";

const TripAdvisorWidget = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (!widgetRef.current) return;

        const script = document.createElement("script");
        script.src =
            "https://www.jscache.com/wejs?wtype=excellent&uniq=937&locationId=9604106&lang=en_UK&display_version=2";
        script.async = true;
        script.defer = true;

        widgetRef.current.appendChild(script);
    }, []);

    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tripadvisor.co.uk/Attraction_Review-g293940-d9604106-Reviews-Giant_Ibis_Transport-Phnom_Penh.html"
            className="bg-white border-2 rounded-md border-[#00a568] flex flex-col justify-center items-center w-[210px]">
            <div className="font-bold text-center w-full bg-[#00a568] p-2">
                Bravo!
            </div>
            <div className="text-sm p-2 text-center underline">
                Giant Ibis Transport rated "excellent" by 1,386 travellers
            </div>
            <div
                id="TA_excellent937 "
                ref={widgetRef}
                className="w-full flex justify-start items-start px-4 py-2"
            >
                <ul id="kdkGoSmW" className="TA_links nvYOvGpsi">
                    <li id="ZY0R2C" className="OAiwrjWKy">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.tripadvisor.co.uk/Attraction_Review-g293940-d9604106-Reviews-Giant_Ibis_Transport-Phnom_Penh.html"
                        >
                            <img
                                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                                alt="TripAdvisor"
                                className="widEXCIMG object-cover"
                                id="CDSWIDEXCLOGO"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </a>
    );
};

export default TripAdvisorWidget;
