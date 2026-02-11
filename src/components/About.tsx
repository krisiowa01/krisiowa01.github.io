export default function About() {
  return (
    <div className="about-section" id="about">
      <h2>KageWolf</h2>
      <p>
       Hello! Thanks so much for visiting my photography portfolio. The story of how I started taking photos is… unconventional. I had a crush on a photographer and was hoping he’d notice me and maybe find me charming. Let’s just say it played out very differently in my head. But while the crush didn’t go anywhere, something else did: my connection with the camera. That part was mutual.

Most of my photos are taken on a Sony Alpha a6000, with a few captured on my iPhone 16. I currently live in Henderson, NV, and people often ask whether I plan to stay or keep exploring new places. I can officially say: I’m here to stay.

I’m an outdoor enthusiast who loves an adventure, but I’ll admit one‑day trips are my favorite because I’m actually a bit of a homebody. I’m a natural introvert: a little shy, somewhat private, and occasionally socially awkward. Photography has become the perfect way for me to express myself and connect with people without feeling overwhelmed. It lets me hide behind the lens while still being part of the moment.

I hope you enjoy my work. Feel free to reach out if you have questions or just want to chat about photography at my email kage@kagewolffoto.com!
      </p>

      <div className="about-photos">
        <figure>
          <img src="/images/about/IMG_6072_jpg.webp" alt="Profile" className="profile-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

        <figure>
          <img src="/images/about/DSC02914.webp" alt="Camera" className="camera-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

        <figure>
          <img src="/images/about/IMG_0388.webp" alt="Nature" className="nature-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}
