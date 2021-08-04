(this["webpackJsonpintegrated-quest-app-fe"]=this["webpackJsonpintegrated-quest-app-fe"]||[]).push([[4],{363:function(e,t,n){"use strict";n.r(t);var o=n(6),i=n(1),a=n(14),r=n(354),c=n(360),s=n(353),d=n(351),l=n(355),u=n(356),m={type:"change"},p={type:"start"},v={type:"end"},O=new r.pb(0,0,1),E=new r.j,b=new r.Z,w=new r.Z(-Math.sqrt(.5),0,0,Math.sqrt(.5)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,o){var i;Object(s.a)(this,n),i=t.call(this),void 0===o&&console.warn('FirstPersonViewControls: The second parameter "domElement" is now mandatory.'),o===document&&console.error('FirstPersonViewControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),!1===window.isSecureContext&&console.error("FirstPersonViewControls: DeviceOrientationEvent is only available in secure contexts (https)"),i.object=e,i.object.rotation.reorder("YXZ"),i.domElement=o,i.domElement.style.touchAction="none",i.enabled=!0,i.target=new r.pb,i.minDistance=0,i.maxDistance=1/0,i.minZoom=0,i.maxZoom=1/0,i.minPolarAngle=0,i.maxPolarAngle=Math.PI,i.minAzimuthAngle=-1/0,i.maxAzimuthAngle=1/0,i.enableDamping=!1,i.dampingFactor=.05,i.enableFOVZoom=!0,i.zoomMinFOV=5,i.zoomMaxFOV=75,i.enableRotate=!0,i.rotateSpeed=1,i.mouseButtons={LEFT:r.E.ROTATE,MIDDLE:r.E.NONE,RIGHT:r.E.NONE},i.touches={ONE:r.ib.NONE,TWO:r.ib.NONE},i.target0=i.target.clone(),i.position0=i.object.position.clone(),i.zoom0=i.object.zoom;var a=new r.Z;i.enabledDeviceOrientation=!0,i.deviceOrientation={},i.screenOrientationDevOr=0,i.alphaOffsetDevOr=0,i.reset=function(){c.target.copy(c.target0),c.object.position.copy(c.position0),c.object.zoom=c.zoom0,c.object.updateProjectionMatrix(),c.dispatchEvent(m),c.update(),u=l.NONE},i.update=function(){!0===c.enabledDeviceOrientation&&c.updateDeviceOrientation()},i.dispose=function(){c.domElement.removeEventListener("pointerdown",F),c.domElement.removeEventListener("pointercancel",M),c.domElement.removeEventListener("wheel",V),c.domElement.ownerDocument.removeEventListener("pointermove",R),c.domElement.ownerDocument.removeEventListener("pointerup",x),c.disconnectDeviceOrientation()};var c=Object(d.a)(i),l={NONE:-1,ROTATE:0,DOLLY:1,TOUCH_ROTATE:3,TOUCH_DOLLY_ROTATE:6,ZOOM_FOV:7},u=l.NONE,f=new r.ob,h=new r.ob,g=new r.ob,D=new r.ob,T=new r.ob,N=[],j={};function y(e,t){var n=(new r.j).copy(c.object.rotation),o=n.x+t,i=n.y+e;c.object.rotation.set(o,i,n.z,"YZX")}function L(e){if(c.object.isPerspectiveCamera){var t=Math.min(Math.max(c.object.fov+e,c.zoomMinFOV),c.zoomMaxFOV);c.object.fov=t,c.object.updateProjectionMatrix()}else console.error("Only perspective camera is supported")}function F(e){!1!==c.enabled&&(0===N.length&&(c.domElement.ownerDocument.addEventListener("pointermove",R),c.domElement.ownerDocument.addEventListener("pointerup",x)),function(e){N.push(e)}(e),"touch"===e.pointerType?function(e){switch(Z(e),N.length){case 1:switch(c.touches.ONE){case r.ib.ROTATE:if(!1===c.enableRotate)return;!function(){if(1===N.length)f.set(N[0].pageX,N[0].pageY);else{var e=.5*(N[0].pageX+N[1].pageX),t=.5*(N[0].pageY+N[1].pageY);f.set(e,t)}}(),u=l.TOUCH_ROTATE;break;default:u=l.NONE}break;case 2:switch(c.touches.TWO){case 100:if(!1===c.enableFOVZoom)return;!function(){if(c.enableFOVZoom){var e=N[0].pageX-N[1].pageX,t=N[0].pageY-N[1].pageY,n=Math.sqrt(e*e+t*t);D.set(0,n)}}(),u=l.ZOOM_FOV;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&c.dispatchEvent(p)}(e):function(e){var t;switch(e.button){case 0:t=c.mouseButtons.LEFT;break;case 1:t=c.mouseButtons.MIDDLE,console.log("select middle mouse action");break;case 2:t=c.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.E.ROTATE:if(!1===c.enableRotate)return;!function(e){f.set(e.clientX,e.clientY)}(e),u=l.ROTATE;break;default:u=l.NONE}u!==l.NONE&&c.dispatchEvent(p)}(e))}function R(e){!1!==c.enabled&&("touch"===e.pointerType?function(e){switch(Z(e),u){case l.ZOOM_FOV:if(!1===c.enableFOVZoom)return;!function(e){if(c.enableFOVZoom){var t=Y(e),n=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(n*n+o*o);T.set(0,i);var a=Math.max(.1,(c.object.fov-c.zoomMinFOV)/(c.zoomMaxFOV-c.zoomMinFOV));T.y>D.y?L(-a):L(a),D.copy(T)}}(e);break;case l.TOUCH_ROTATE:if(!1===c.enableRotate)return;!function(e){if(1===N.length)h.set(e.pageX,e.pageY);else{var t=Y(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);h.set(n,o)}g.subVectors(h,f).multiplyScalar(c.rotateSpeed);var i=c.domElement,a=g.x/i.clientHeight,r=g.y/i.clientHeight;f.copy(h),y(a,r)}(e),c.update();break;default:u=l.NONE}}(e):function(e){if(!1===c.enabled)return;switch(u){case l.ROTATE:if(!1===c.enableRotate)return;!function(e){h.set(e.clientX,e.clientY),g.subVectors(h,f).multiplyScalar(c.rotateSpeed);var t=c.domElement,n=g.x/t.clientHeight,o=g.y/t.clientHeight;f.copy(h),y(n,o)}(e)}}(e))}function x(e){!1!==c.enabled&&(e.pointerType,c.dispatchEvent(v),u=l.NONE,A(e),0===N.length&&(c.domElement.ownerDocument.removeEventListener("pointermove",R),c.domElement.ownerDocument.removeEventListener("pointerup",x)))}function M(e){A(e)}function V(e){!1===c.enabled||!1===c.enableFOVZoom||u!==l.NONE&&u!==l.ROTATE||(e.preventDefault(),c.dispatchEvent(p),function(e){e.deltaY<0?c.enableFOVZoom&&L(-5):e.deltaY>0&&c.enableFOVZoom&&L(5),c.update()}(e),c.dispatchEvent(v))}function A(e){delete j[e.pointerId];for(var t=0;t<N.length;t++)if(N[t].pointerId===e.pointerId)return void N.splice(t,1)}function Z(e){var t=j[e.pointerId];void 0===t&&(t=new r.ob,j[e.pointerId]=t),t.set(e.pageX,e.pageY)}function Y(e){var t=e.pointerId===N[0].pointerId?N[1]:N[0];return j[t.pointerId]}var I=function(e){c.deviceOrientation=e},P=function(){c.screenOrientationDevOr=window.orientation||0};return i.connectDeviceOrientation=function(){P(),void 0!==window.DeviceOrientationEvent&&"function"===typeof window.DeviceOrientationEvent.requestPermission?(alert("requestPermission"),window.DeviceOrientationEvent.requestPermission().then((function(e){alert("response: "+e),"granted"===e&&(window.addEventListener("orientationchange",P),window.addEventListener("deviceorientation",I))})).catch((function(e){alert("response error: "+e),console.error("THREE.MyDeviceOrientationControls: Unable to use DeviceOrientation API:",e)}))):(alert("else DeviceOrientationEvent"),window.addEventListener("orientationchange",P),window.addEventListener("deviceorientation",I)),c.enabledDeviceOrientation=!0},i.disconnectDeviceOrientation=function(){window.removeEventListener("orientationchange",P),window.removeEventListener("deviceorientation",I),c.enabledDeviceOrientation=!1},i.updateDeviceOrientation=function(){if(!1!==c.enabledDeviceOrientation){var e=c.deviceOrientation;if(alert("device: "+e),e){var t=e.alpha?r.G.degToRad(e.alpha)+c.alphaOffsetDevOr:0,n=e.beta?r.G.degToRad(e.beta):0,o=e.gamma?r.G.degToRad(e.gamma):0,i=c.screenOrientationDevOr?r.G.degToRad(c.screenOrientationDevOr):0;!function(e,t,n,o,i){E.set(n,t,-o,"YXZ"),e.setFromEuler(E),e.multiply(w),e.multiply(b.setFromAxisAngle(O,-i))}(c.object.quaternion,t,n,o,i),8*(1-a.dot(c.object.quaternion))>1e-6&&(a.copy(c.object.quaternion),c.dispatchEvent(m))}}else alert("false")},c.domElement.addEventListener("pointerdown",F),c.domElement.addEventListener("pointercancel",M),c.domElement.addEventListener("wheel",V,{passive:!1}),i.connectDeviceOrientation(),i}return n}(r.k),h=n(60),g=n.p+"static/media/gallery_room.b9330f65.glb",D=n(0);t.default=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],d=Object(i.useState)(!1),l=Object(o.a)(d,2),u=l[0],m=l[1],p=Object(i.useState)(!1),v=Object(o.a)(p,2),O=v[0],E=v[1],b=Object(a.h)();Object(i.useEffect)((function(){n||(s(!0),function(e,t,n,o,i){var a=new r.db,s=new r.U(75,window.innerWidth/window.innerHeight,1,3e3);s.position.y=225;var d=new r.rb({antialias:!0});d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),d.outputEncoding=r.sb,e.appendChild(d.domElement);var l=new f(s,d.domElement);l.enableFOVZoom=!0,l.mouseButtons.LEFT=r.E.ROTATE,l.mouseButtons.MIDDLE=r.E.NONE,l.mouseButtons.RIGHT=r.E.NONE,l.touches.ONE=r.ib.NONE,l.touches.TWO=100,l.enabledDeviceOrientation=window.DeviceOrientationEvent&&"ontouchstart"in window,alert(l.enabledDeviceOrientation),alert(window.DeviceOrientationEvent),alert("ontouchstart"in window),l.update();var u=new r.D,m=new r.lb(u),p=t.map((function(e){return new r.K({map:m.load(e)})}));new c.a(u).load(n,(function(e){o&&o(),a.add(e.scene)})),u.onLoad=function(){i&&i();for(var e=0;e<6;++e){var t="canvas"+(e+1),n=a.getObjectByName(t,!0);n.material=p[e];var o=n.material.map.image.width,r=n.material.map.image.height,c=o/r;o>r?n.scale.y/=c:n.scale.x*=c}},function e(){window.requestAnimationFrame(e),l.update(),d.render(a,s)}()}(w.current,b.state.resources,g,(function(){return m(!0)}),(function(){return E(!0)})))}),[n,b.state.resources]);var w=Object(i.useRef)(null);return Object(D.jsx)("div",{ref:w,children:Object(D.jsx)(h.a,{isLoading:!u||!O})})}}}]);
//# sourceMappingURL=4.79c63e39.chunk.js.map