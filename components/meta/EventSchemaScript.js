export default function EventSchemaScript({ event }) {
  const eventName = encodeURIComponent(event?.name);
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    eventStatus: "https://schema.org/EventScheduled",
    // eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: {
      "@type": "Place",
      //   url: "https://operaonline.stream5.com/",
      name: event?.location,
    },
    image: [event?.imageUrl],
    description: event?.description,
    offers: {
      "@type": "Offer",
      url: "https://www.example.com/event_offer/12345_202403180430",
      price: "30",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-21T12:00",
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Kira and Morrison",
    },
    organizer: {
      "@type": "Organization",
      name: "Kira and Morrison Music",
      url: "https://kiraandmorrisonmusic.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
    />
  );
}
