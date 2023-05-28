import RepoView from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Link href="/code/repo" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <RepoView name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
