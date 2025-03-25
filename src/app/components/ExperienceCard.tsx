import Image from "next/image";

export interface ExperienceCardProps {
    logoUrl: string;
    position: string;
    company: string;
    period: string;
    tasks: string[];
}

export function ExperienceCard({
    logoUrl,
    position,
    company,
    period,
    tasks,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col mt-8 bg-white p-4 justify-center items-start w-full">
        <div className="min-w-[60px]">
            <Image alt="" height={60} width={60} src={logoUrl} />
        </div>
        <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg">{position}</span>
            <div className="flex gap-2">
            <span className="font-medium">{company}</span>
            <span className="font-medium text-gray-400">{period}</span>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="mb-3 list-disc">{task}</li>
                ))}
            </ul> 
        </div>
    </div>
  );
}