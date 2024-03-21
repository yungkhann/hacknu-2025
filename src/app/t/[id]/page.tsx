'use server'

import Layout from "@/components/layout";
import { Card } from "@/components/team-card";

const BACKEND_URL = 'https://api.nuacm.kz/api/';

interface Person {
  name: string;
  surname: string;
}

export interface TeamInfo {
  team_name: string;
  team_code: string;
  captain: Person;
  members: Person[];
}

async function fetchTeamInfo(id: string | string[]): Promise<TeamInfo | null> {
  try {
    const response = await fetch(`${BACKEND_URL}teams/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching team info', error);
    return null;
  }
}

export default async function IdPage({
  params,
}: Readonly<{
  params: {
    id: string;
  };
}>)  {
  const { id } = params;

  const teamInfo = await fetchTeamInfo(id);

  if(!teamInfo) return (
    <div className="flex w-full h-full justify-center items-center">
      <h1>Team not found</h1>
    </div>
  );
  
  return (
    <Layout>
      <div className="flex h-full w-full p-2 justify-center items-center">
        <Card {...teamInfo} />
      </div>
    </Layout>
  )
}