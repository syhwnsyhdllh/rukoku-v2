import EventDetailComponent from "@/components/sekolah-parenting/EventDetailComponent";
import { notFound } from "next/navigation";
import { getParentingEventBySlug } from "@/lib/parenting-events";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ParentingDetailPage({ params }: PageProps) {
  const { slug } = params;

  // Get event data by slug
  const event = getParentingEventBySlug(slug);

  // If event not found, show 404
  if (!event) {
    notFound();
  }

  return (
    <EventDetailComponent
      type="agenda-parenting"
      title={event.title}
      startDate={event.startDate}
      startTime={event.startTime}
      endTime={event.endTime}
      location={event.location}
      locationUrl={event.locationUrl}
      organizer={event.organizer}
      posterImage={event.posterImage}
      description={event.description}
      registrationUrl={event.registrationUrl}
      price={event.price}
      isPaid={event.isPaid}
      backUrl="/parenting/agenda-parenting"
    />
  );
}
