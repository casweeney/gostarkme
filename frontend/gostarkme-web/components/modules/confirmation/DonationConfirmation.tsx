import ShareXButton from "@/components/ui/ShareOnX";
import React from "react";

interface DonationConfirmationProps {
    txHash: String;
    message: String;
}

const DonationConfirmation: React.FC<DonationConfirmationProps> = ({
    txHash,
    message,
}) => (
    <>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-2xl font-light m-5">Your donation was sent to the funding, take a look at the transaction <a className="text-blue-600" target="_blank" href={"https://sepolia.voyager.online/tx/" + txHash}>here.</a></p>
            <p className="text-2xl font-light m-5">Share your contribution via X to tell everyone how cool you are</p>
            <ShareXButton message={message} />
        </div>
    </>
);

export default DonationConfirmation;
