import Masonry from './Masonry';

interface FluidGlassProps {
  showNavigation?: boolean;
}

export default function FluidGlass({}: FluidGlassProps) {
  // Medical images in black and white - using verified URLs with unique IDs
  const medicalItems = [
    {
      id: "2", 
      img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100",
      url: "#",
      height: 750,
    },
    {
      id: "4",
      img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=500&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100",
      url: "#",
      height: 500,
    },
    {
      id: "5",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=650&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100",
      url: "#",
      height: 650,
    },
    {
      id: "6",
      img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&h=850&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100",
      url: "#",
      height: 850,
    },
    {
      id: "13",
      img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=650&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100",
      url: "#",
      height: 650,
    },
    {
      id: "14",
      img: "/assets/medicalimages/1a2d4bb2d72224f687f8e65befccc027.jpg?sat=-100",
      url: "#",
      height: 750,
    },
    {
      id: "15",
      img: "/assets/medicalimages/2029313ad5be146a1f4b9b739a572d10.jpg?sat=-100",
      url: "#",
      height: 500,
    },
    {
      id: "16",
      img: "/assets/medicalimages/3ad3055735ff083eee0bd9d6f35dc38d.jpg?sat=-100",
      url: "#",
      height: 650,
    },
    {
      id: "17",
      img: "/assets/medicalimages/a92b64e1d66d35633eae7bd9d38874fd.jpg?sat=-100",
      url: "#",
      height: 850,
    },
    {
      id: "18",
      img: "/assets/medicalimages/c7388c7d8adcbaf5771c360070bdaf4d.jpg?sat=-100",
      url: "#",
      height: 900,
    },
    {
      id: "19",
      img: "/assets/medicalimages/ec90c4e6d5683f9808eb7f315556824a.jpg?sat=-100",
      url: "#",
      height: 650,
    },
    {
      id: "20",
      img: "/assets/medicalimages/f72d7b3a8b7b2b63580f70aab8799ebe.jpg?sat=-100",
      url: "#",
      height: 750,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grayscale"> {/* Apply black-and-white filter */}
          <Masonry
            items={medicalItems}
            ease="power3.out"
            duration={1}
            stagger={0.09}
            animateFrom="random"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
        </div>
      </div>
    </div>
  );
}

// Example usage:
// import FluidGlass from './FluidGlass'
//
// <FluidGlass showNavigation={true} />