"use client";
import Image from "next/image";
import AddressIcon from "../../kontakt-page/address-icon";
import Button from "../button";
import Link from "next/link";
import ElectricityIcon from "../electricity-icon";
import { Fade } from "react-awesome-reveal";

export default function RealizationCard() {
  return (
    <Fade direction="bottom" delay={600} triggerOnce>
      <div className="flex flex-col max-w-screen h-[500px] sm:w-96 rounded-lg shadow-md bg-primaryGray">
        <img className="w-contain rounded-t-lg" src="/realization1.jpg" />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div className="my-4">
            <AddressIcon />
            <p className="inline-block">Katowice</p>
          </div>
          <div>
            <ElectricityIcon />
            <p className="inline-block">5 kWp</p>
          </div>

          <Button className="ml-auto mt-auto">zobacz</Button>
        </div>
      </div>
    </Fade>
  );
}
