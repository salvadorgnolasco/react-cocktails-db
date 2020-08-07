import React from 'react';

import about from '../images/about.jpg';

function About() {
  return (
    <section className="w-100 d-flex justify-content-center">
      <div class="w-75 m-5 p-3 card border-light mb-3">
        <div class="card-body bg-dark">
          <h5 class="card-title title bg-dark">About us</h5>
          <p class="card-text bg-dark text-white text-justify">
            This program is free software: you can redistribute it and/or modify
            it under the terms of the GNU General Public License as published by
            the Free Software Foundation, either version 3 of the License, or
            (at your option) any later version.
            This program is distributed in the hope that it will be useful,
            but WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
            GNU General Public License for more details.
        </p>
        </div>
        <img src={about} class="card-img-top" alt="About" />
      </div>
    </section>
  )
}

export default About;
