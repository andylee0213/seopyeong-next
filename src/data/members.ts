import rawData from "./members-data.json";

export interface ProfileEntry {
  year: string;
  content: string;
}

export type Office = "main" | "gangbuk" | "ilsan";

export interface Member {
  slug: string;
  name: string;
  email: string;
  tel: string;
  detailImage: string;
  listImage: string;
  isRepresentative: boolean;
  intro: string;
  education: ProfileEntry[];
  career: ProfileEntry[];
  activities: ProfileEntry[];
  othercareer: ProfileEntry[];
}

export interface OfficeSection {
  title: string;
  office: Office;
  members: Array<{
    slug: string | null;
    name: string;
    role: string;
    listImage: string;
  }>;
}

export interface MembersData {
  members: Member[];
  memberSections: OfficeSection[];
}

function withDefaults(m: Record<string, unknown>): Member {
  return {
    slug: (m.slug as string) ?? "",
    name: (m.name as string) ?? "",
    email: (m.email as string) ?? "",
    tel: (m.tel as string) ?? "",
    detailImage: (m.detailImage as string) ?? "",
    listImage: (m.listImage as string) ?? "",
    isRepresentative: (m.isRepresentative as boolean) ?? false,
    intro: (m.intro as string) ?? "",
    education: (m.education as ProfileEntry[]) ?? [],
    career: (m.career as ProfileEntry[]) ?? [],
    activities: (m.activities as ProfileEntry[]) ?? [],
    othercareer: (m.othercareer as ProfileEntry[]) ?? [],
  };
}

export const members: Member[] = (rawData.members as Record<string, unknown>[]).map(withDefaults);
export const memberSections: OfficeSection[] = rawData.memberSections as OfficeSection[];

export function getMemberBySlug(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}
