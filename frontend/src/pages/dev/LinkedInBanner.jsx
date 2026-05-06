import React from 'react';

/* ============================================================
   LinkedIn Banner — minimal monochrome
   Native dimensions: 1584 × 396 (4:1)

   Tweak THEME and CONTENT below. Styles are scoped via a
   unique class prefix so nothing leaks into the rest of the app.

   Use the following command within developer tools console of Firefox to export:
   :screenshot --selector "#linkedin-banner" --dpr 2

   ============================================================ */

const THEME = {
    bg:   '#e3dce4',                         // matches profile-pic backdrop
    ink:  '#000000',                         // pure black, mirrors site palette
    font: 'Helvetica, Arial, sans-serif',    // system sans, matches site
};

const CONTENT = {
    name:    'Nicholas A. Ball Ulmer',
    title:   'Software Engineer | Full Stack Developer',
    handle:  'F1 For Help',
    website: 'F1ForHelp.dev',
    status:  'Open to opportunities',
};

/* LinkedIn banner native dimensions — don't change unless LinkedIn does */
const NATIVE_W = 1584;
const NATIVE_H = 396;

export default function LinkedInBanner({ showProfilePlaceholder = true }) {
    /* unique scoped class so styles can't collide with anything else */
    const rawId = React.useId();
    const id = 'lnb-' + rawId.replace(/:/g, '');

    return (
        <>
            <style>{`
                .${id}-wrap {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .${id} {
                    position: relative;
                    width: 100%;
                    aspect-ratio: ${NATIVE_W} / ${NATIVE_H};
                    background: ${THEME.bg};
                    color: ${THEME.ink};
                    font-family: ${THEME.font};
                    overflow: hidden;
                    container-type: inline-size;
                    border-radius: 6px;
                    box-shadow: 0 1px 0 rgba(0,0,0,0.04);
                }

                /* corner labels */
                .${id}-corner {
                    position: absolute;
                    font-size: clamp(20px, 1.05cqi, 14px);
                    font-weight: 500;
                    letter-spacing: 0.04em;
                    line-height: 1;
                }
                .${id}-tl { top: 8%;    left: 3.5%; }
                .${id}-tr { top: 8%;    right: 3.5%; }
                .${id}-br { bottom: 9%; right: 3.5%; }

                /* brackets so 'F1 For Help' reads first */
                .${id}-handle .b {
                    opacity: 1;             /* 0.5 dims them; 1 makes them full strength */
                    font-size: 1.2em;       /* 1em = same as text. Try 1.4–2em */
                    font-weight: 500;       /* heavier strokes */
                    vertical-align: 0.04em; /* nudge down so bigger brackets sit aligned */
                    margin: 0 0.05em;       /* extra breathing room around them */
                }

                /* center stack */
                .${id}-center {
                    position: absolute; inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 0 6%;
                    text-align: center;
                }
                .${id}-name {
                    font-size: clamp(26px, 6.4cqi, 50px);
                    font-weight: 400;
                    letter-spacing: -0.015em;
                    line-height: 1;
                    margin: 0;
                    white-space: nowrap;
                }
                .${id}-title {
                    margin-top: 1.5em;
                    font-size: clamp(20px, 1.35cqi, 17px);
                    font-weight: 400;
                    letter-spacing: 0.14em;
                }

                /* profile-pic overlay simulator (toggle off when exporting) */
                .${id}-pfp {
                    position: absolute;
                    left: 5.5%;
                    bottom: -22%;
                    width: 9.6%;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    border: 5px solid #fff;
                    background: ${THEME.bg};
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                    z-index: 2;
                }
            `}</style>

            <div id="linkedin-banner" className={`${id}-wrap`}>
                <div className={id}>
                    {/* top-left: brand handle */}
                    <div className={`${id}-corner ${id}-tl ${id}-handle`}>
                        <span className="b">{'{ '}</span>
                        {CONTENT.handle}
                        <span className="b">{' }'}</span>
                    </div>

                    {/* top-right: status */}
                    <div className={`${id}-corner ${id}-tr`}>{CONTENT.status}</div>

                    {/* center: name + title (mobile-safe) */}
                    <div className={`${id}-center`}>
                        <h1 className={`${id}-name`}>{CONTENT.name}</h1>
                        <div className={`${id}-title`}>{CONTENT.title}</div>
                    </div>

                    {/* bottom-right: website */}
                    <div className={`${id}-corner ${id}-br`}>{CONTENT.website}</div>

                    {/* profile-pic placeholder — set showProfilePlaceholder={false} to hide */}
                    {showProfilePlaceholder && <div className={`${id}-pfp`} />}
                </div>
            </div>
        </>
    );
}