export default function About() {
  return (
    <div className="about-section" id="about">
      <h2>KageWolf</h2>
      <p>
     <div id="introduction">Hello! Thanks so much for visiting my photography portfolio. I’ve been taking photos for six years now, and somewhere along the way, the camera became a quiet companion, something that helped me slow down, pay attention, and carry pieces of each place I’ve lived.

My journey with photography began in Cedar Rapids, IA. I spent hours wandering past store windows, crossing bridges at night, and exploring quiet trails on my own. Those walks taught me how to see light, color, and small details I used to overlook. The camera gave me a reason to pause and breathe.

When the opportunity to move to the Pacific Northwest came along, I felt that familiar mix of nerves and excitement. I prayed, trusted the moment, and went. Not long after, the world shut down due to COVID‑19. Life in the PNW looked nothing like I imagined, but remote work opened a door I didn’t expect suddenly, I could live anywhere in the States.

The only person I knew outside of Iowa at the time, that I was friends with, lived in North Las Vegas, NV. I reached out, wanting to be thoughtful of her space, and asked how she felt about me moving to the city. She was excited. I prayed again, and then I moved.
</div>
<br />
<br />
<div id="current">
Las Vegas, NV.
<br />
<br />
I’ve been in the Las Vegas area for five years now, and I’ve grown to love the duality of this place. I’ve explored the red rocks of Red Rock Canyon, the surreal landscapes of Valley of Fire, and so many corners of the Southwest that feel like stepping onto another planet. I’ve also found a community of photographers and artists who continue to inspire me and push my creativity forward.

I live in Henderson, NV now, and I’m here for good. I love being outdoors and I’m always up for an adventure, as long as I don't have to wake up at 5am LOL. Photography fits me well. It lets me connect without feeling overwhelmed, letting me stay behind the lens while still being part of the moment. The journey that led me to this place in my life, it feels meant to be. In the words of Lil Wayne, "Let is all work out".
<br />
<br />
</div>
<div id="programming">
Why am I really here? Photography is a cool hobby that I enjoy, but it has nothing on programming!! 

<br/>
<br/>
I went back to school in 2014 for Software Engineering: as a single mom, plus working in a group home full time. It was a moment in my life where, I had been divorced a few years prior, lost a job, had a mortgage and people depending on me. It was either programming or nursing but I needed a better way of life for us. Fast forward 8 years, I finally worked my way into this career and every day I get to learn, experiment, discover, troubleshoot this binary beast, it's a dream career. This website is a small dream realized built during late nights and quiet weekends. I’m currently sharpening my frontend skills with React.js and Material UI, so if you have ideas for features or improvements, feel free to email me.

If you ever want to talk photography or have questions, you can reach me at kage@kagewolffoto.com.
</div>
 </p>

      <div className="about-photos">
        <figure>
          <img src="/images/about/IMG_6072_jpg.webp" alt="Profile" className="profile-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

        <figure>
          <img src="/images/nevada/IMG_5865.webp" alt="Camera" className="camera-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

        <figure>
          <img src="images/iowa/DSC00875.webp" alt="Iowa" className="iowa-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>

        <figure>
          <img src="/images/about/DSC03377.webp" alt="Nature" className="nature-pic" />
          <figcaption className="gallery-caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}
