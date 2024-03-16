import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";

import { getProfiles } from "@/componentes/services/getProfiles";
import { useQuery } from "@tanstack/react-query";

export default function Profilepage() {
   const {data, isLoading } = useQuery (
    {
        queryKey: ["profiles"],
        queryFn: getProfiles,
        refetchOnWindowFocus: true,
    });

   if (isLoading) {
    return <Container>Loading</Container>;
   }


    return ( 
    <Container>
        Profiles

        <ul>
            {data.map((profile) => (
                <li key={profile.id}>
                    <Link href={"/profiles/"+profile.id}>{profile.Name}</Link>
                    </li>
            ))}
        </ul>
    </Container>
    );
}