import EventDetailComponent from "@/components/sekolah-parenting/EventDetailComponent";
import { notFound } from "next/navigation";
import { getSchoolEventBySlug } from "@/lib/school-events";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function SchoolEventDetailPage({ params }: PageProps) {
  const { slug } = params;

  // Get event data by slug
  const event = getSchoolEventBySlug(slug);

  // If event not found, show 404
  if (!event) {
    notFound();
  }

  return (
    <EventDetailComponent
      type="event-sekolah"
      title={event.title}
      startDate={event.startDate}
      endDate={event.endDate}
      startTime={event.startTime}
      endTime={event.endTime}
      location={event.location}
      locationUrl={event.locationUrl}
      organizer={event.organizer}
      school={event.school} // ✅ Pass school name
      posterImage={event.posterImage}
      description={event.description}
      price={event.price} // ✅ Pass price
      isPaid={event.isPaid} // ✅ Pass isPaid
      registrationUrl={event.registrationUrl}
      ticketUrl={event.ticketUrl}
      backUrl="/kegiatan-sekolahku/event-sekolahku"
    />
  );
}
