import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
  const {footer} = props;
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">{footer.nosotros}</h5>
                <p>{footer.nosotrosParrafo}
                <br />{footer.nosotrosLinea1}
                <br />{footer.nosotrosLinea2}
                <br />{footer.nosotrosLinea2}
                </p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">{footer.enlaces}<span></span></h5>
                <ul class="thumbnail-widget">
                  <li>
                  <Link href="#">{footer.enlace1}</Link>
                  </li>
                  <li>
                  <Link href="#">{footer.enlace2}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-md-3">
              <div class="widget no-box">
                <h5 class="widget-title">{footer.social}<span></span></h5>
                <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                <ul class="social-footer2">
                  <li class=""><Link href="#"><i className="fab fa-facebook-f" />{footer.social1}</Link></li>
                  <li class=""><Link href="#"><i className="fab fa-instagram" />{footer.social2}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>Copyright Company Name © 2016. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
  </footer>
  )
}
