"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";
import { Fade } from "react-awesome-reveal";

export default function NewsCard({ title, lead, slug, img }) {
  return (
    <Fade direction="bottom" delay={300} triggerOnce>
      <div className="flex flex-col max-w-screen h-[520px] sm:w-96 rounded-lg shadow-md bg-primaryGray">
        <Image
          className="w-contain object-cover h-[40%] rounded-t-lg"
          src={img ? `https:${img.fields.file.url}` : ""}
          width={img?.fields?.file?.details?.image?.width}
          height={img?.fields?.file?.details?.image?.height}
          alt={img?.fields?.description ? img.fields.description : ""}
        />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2">
            {lead.length > 200 ? lead.slice(0, 200) + "..." : lead}
          </p>
          <Button className="ml-auto mt-auto">
            <Link href={`/aktualnosci/${slug}`}>czytaj więcej</Link>
          </Button>
        </div>
      </div>
    </Fade>
  );
}
