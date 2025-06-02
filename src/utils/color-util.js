export const getStatusColor = (status) => {
    switch (status) {
        case "Available":
            return "text-[#000000] cursor-pointer";
        case "Reserved":
            return "text-[#000000] cursor-not-allowed";
        case "Booked":
            return "text-[#000000] cursor-not-allowed";
        case "selected":
            return "text-[#000000] cursor-pointer";
        case "hide":
            return "bg-transparent";
        case "wc":
            return "bg-white border-1 border-gray-300";
        default:
            return " hover:bg-gray-400 text-white cursor-pointer";
    }
};