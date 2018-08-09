/*
 * Hero - Shoutcast and Icecast Radio Player With History - v1.4
 * Copyright 2017, LambertGroup
 * 
 */

(function(f) {
    function J(a, b, c, e) {
        f(a.thumbsHolder_Thumbs[a.current_img_no]).css({
            background: b.playlistRecordBgOnColor,
            "border-bottom-color": b.playlistRecordBottomBorderOnColor,
            color: b.playlistRecordTextOnColor
        });
        a.is_very_first || L(-1, a, b, c);
        if ("" != b.radio_stream) var z = b.radio_stream;
        return z
    }

    function O(a, b) {
        // var c = new XMLHttpRequest;
        // c.open(a.method, "https://cors-anywhere.herokuapp.com/" + a.url);
        // c.onload = c.onerror = function() {
        //     b(a.method + " " + a.url + "\n" + c.status + " " + c.statusText + "\n\n" + (c.responseText ||
        //         ""))
        // };
        // /^POST/i.test(a.method) && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // c.send(a.data)
    }

    function H(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y) {
        // b.showOnlyPlayButton || (!1 === a.now_playing_found && a.now_playing_current_k < a.now_playing_arr_lenght && a.now_playing_current_k++, "" != a.ip && a.now_playing_current_k < a.now_playing_arr_lenght ? (O({
        //     method: "GET",
        //     url: "http://" + a.ip + ":" + a.port + "/" + a.now_playing_arr[a.now_playing_current_k]
        // }, function(n) {
        //     var p = "";
        //     switch (a.now_playing_current_k) {
        //         case 0:
        //             if (-1 !=
        //                 n.indexOf("<SONGTITLE>")) {
        //                 a.now_playing_found = !0;
        //                 var g = n.indexOf("<SONGTITLE>") + 11;
        //                 var t = n.indexOf("</SONGTITLE>") - g;
        //                 p = n.substr(g, t);
        //                 a.curTitle = p;
        //                 G(a, b, c, h, v, l, k, r, m, q, u)
        //             } else H(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y);
        //             break;
        //         case 1:
        //             n = n.replace("</body></html>", "");
        //             p = n.split(",");
        //             "" != p[6] && void 0 != p[6] && "oracle:0" != p[6] ? (a.now_playing_found = !0, p = p[6], a.curTitle = p, G(a, b, c, h, v, l, k, r, m, q, u)) : H(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y);
        //             break;
        //         case 2:
        //             g = n.indexOf('{"icestats":');
        //             if (-1 !== g) {
        //                 t = n.length;
        //                 n = n.substr(g, t);
        //                 n = JSON.parse(n);
        //                 g = !1;
        //                 for (var z = 0; z < Object.keys(n.icestats.source).length && !g;) t = n.icestats.source[z].listenurl, 0 < t.indexOf(a.mount_point) && (g = !0, z--), z++;
        //                 g && "" != n.icestats.source[z].title && void 0 != n.icestats.source[z].title && (a.now_playing_found = !0, p = n.icestats.source[z].title, a.curTitle = p, G(a, b, c, h, v, l, k, r, m, q, u))
        //             }
        //             "" == p && (a.now_playing_found = !1, H(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y));
        //             break;
        //         case 3:
        //             "" != a.mount_point && (g = n.indexOf(a.mount_point));
        //             0 < g && (t = n.length, n = n.substr(g, t));
        //             t = n.indexOf("Currently playing:"); - 1 ==
        //                 t && (t = n.indexOf("Current Song:"));
        //             0 < t && (a.now_playing_found = !0, g = n.indexOf('<td class="streamstats">', t), g = 0 < g ? g + 24 : n.indexOf('<td class="streamdata">', t) + 23, t = n.indexOf("</td>", g), p = n.substr(g, t - g), a.curTitle = p, G(a, b, c, h, v, l, k, r, m, q, u));
        //             "" == p && (a.now_playing_found = !1, H(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y));
        //             break;
        //         default:
        //             a.now_playing_found = !0, a.curTitle = "Not available...", G(a, b, c, h, v, l, k, r, m, q, u)
        //     }
        // }), "" != a.curTitle && a.isHistoryGenerated && a.prevTitle != a.curTitle && ("" != a.prevTitle && (30 <= a.gen_total_images &&
        //     (a.gen_total_images--, a.playlist_arr.pop(), a.playlist_images_arr.pop()), a.gen_total_images++, a.playlist_arr.unshift(a.prevTitle), a.playlist_images_arr.unshift(a.prev_song_image), K(a, b, h, c, e, f, A, v, l, k, r, m, q, u, w, y)), a.prevTitle = a.curTitle)) : (curSong = "Data not available...", a.curTitle = curSong, G(a, b, c, h, v, l, k, r, m, q, u)))
    
    }

    function R(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y, n) {
        // var p = a.playlist_arr[n].split("-");
        // p[0] = p[0].trim();
        // b.grabLastFmPhoto && a.lastfm.artist.getInfo({
        //     artist: p[0]
        // }, {
        //     success: function(g) {
        //         "" != g.artist.image[2]["#text"].trim() &&
        //             (a.playlist_images_arr[n] = g.artist.image[2]["#text"]);
        //         n == a.playlist_arr.length - 1 && setTimeout(function() {
        //             K(a, b, e, c, u, q, A, f, h, v, l, k, r, m, w, y)
        //         }, 1E3)
        //     },
        //     error: function(g, p) {
        //         n == a.playlist_arr.length - 1 && setTimeout(function() {
        //             K(a, b, e, c, u, q, A, f, h, v, l, k, r, m, w, y)
        //         }, 1E3)
        //     }
        // })
    }

    function S(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y, n) {
        clearInterval(a.radioReaderAjaxInterval); - 1 == b.radio_stream.indexOf("/", 9) && (b.radio_stream += "/;");
        "/" == b.radio_stream.charAt(b.radio_stream.length - 1) && (b.radio_stream += ";");
        var p = b.radio_stream.match(a.myregexp);
        null != p && (a.ip = p[1], a.port = p[2], a.mount_point = p[3], ";" == a.mount_point.trim() && (a.mount_point = ""));
        m.css({
            width: b.playerWidth + "px",
            height: b.imageHeight + "px",
            background: "url(" + b.noImageAvailable + ") #000000",
            "background-repeat": "no-repeat",
            "background-position": "top center",
            "background-size": "cover"
        });
        b.showOnlyPlayButton || (H(a, b, c, u, q, e, f, h, v, l, k, r, m, A, w, y), a.radioReaderAjaxInterval = setInterval(function() {
            H(a, b, c, u, q, e, f, h, v, l, k, r, m, A, w, y)
        }, 1E3 * b.nowPlayingInterval), a.playlist_arr = [], a.playlist_images_arr = [], O({
            method: "GET",
            url: "http://" + a.ip + ":" + a.port + "/" + a.history_arr[a.history_current_k]
        }, function(g) {
            var p = -1;
            if (-1 != g.indexOf("Current Song")) {
                var z = g.indexOf("Current Song") + 12;
                var B = g.length;
                g = g.substr(z, B);
                g = g.split("</td><td>");
                g.shift();
                for (var d = 0; d < g.length; d++) z = g[d].indexOf("</"), -1 != z && (B = z, g[d] = g[d].substr(0, B), g[d] = g[d].replace(/<\/?[^>]+(>|$)/g, ""), "" != g[d] && "Empty Title" != g[d] && (p++, a.playlist_arr[p] = g[d], a.playlist_images_arr[p] = b.noImageAvailable, R(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y,
                    p)))
            }
            a.playlist_arr.length ? K(a, b, e, c, u, q, A, f, h, v, l, k, r, m, w, y) : a.isHistoryGenerated = !0;
            b.sticky && b.startMinified && n.click()
        }));
        a.isFlashNeeded ? "" != a.myFlashObject && a.myFlashObject.myAS3function(J(a, b, c, e), b.initialVolume) : (document.getElementById(a.audioID).src = J(a, b, c, e), document.getElementById(a.audioID).load(), b.autoPlay && f.click())
    }

    function G(a, b, c, e, f, h, v, l, k, r, m) {
        a.curSongText = "";
        b.showTitle && null != a.curTitle && "" != a.curTitle && (a.curSongText += a.curTitle);
        b.showRadioStation && null != b.radio_name &&
            "" != b.radio_name && k.html(b.radio_name);
        c = a.curTitle.split("-");
        var q = b.noImageAvailable;
        c[0] = c[0].trim();
        b.grabLastFmPhoto ? a.lastfm.artist.getInfo({
            artist: c[0]
        }, {
            success: function(b) {
                "" != b.artist.image[3]["#text"].trim() && (q = b.artist.image[3]["#text"]);
                m.css({
                    background: "url(" + q + ") #000000",
                    "background-repeat": "no-repeat",
                    "background-position": "top center",
                    "background-size": "cover"
                });
                a.prev_song_image = a.cur_song_image;
                a.cur_song_image = q
            },
            error: function(b, c) {
                a.prev_song_image = a.cur_song_image;
                a.cur_song_image =
                    q;
                m.css({
                    background: "url(" + q + ") #000000",
                    "background-repeat": "no-repeat",
                    "background-position": "top center",
                    "background-size": "cover"
                })
            }
        }) : (a.prev_song_image = a.cur_song_image, a.cur_song_image = q, m.css({
            background: "url(" + q + ") #000000",
            "background-repeat": "no-repeat",
            "background-position": "top center",
            "background-size": "cover"
        }));
        a.curSongText && (c = a.curSongText.split("-"), a.curSongAuthorText = c[0].trim(), 2 <= c.length && (a.curSongText = c[1].trim()), 3 <= c.length && (a.curSongText += " - " + c[2].trim()), h.html(P(a.curSongAuthorText)),
            l.css({
                width: "auto"
            }), a.isStationTitleInsideScrolling = !1, a.stationTitleInsideWait = 0, l.stop(), l.css({
                "margin-left": 0
            }), l.html(a.curSongText), clearInterval(a.timeupdateInterval), l.width() > a.titleWidth ? a.timeupdateInterval = setInterval(function() {
                !a.isStationTitleInsideScrolling && 5 <= a.stationTitleInsideWait && l.width() > a.titleWidth ? (a.isStationTitleInsideScrolling = !0, a.stationTitleInsideWait = 0, l.html(a.curSongText + " **** " + a.curSongText + " **** " + a.curSongText + " **** " + a.curSongText + " **** " + a.curSongText +
                    " **** "), l.css({
                    "margin-left": 0
                }), l.stop().animate({
                    "margin-left": b.playerWidth - l.width() + "px"
                }, parseInt(1E4 * (l.width() - b.playerWidth) / 150, 10), "linear", function() {
                    a.isStationTitleInsideScrolling = !1
                })) : !a.isStationTitleInsideScrolling && l.width() > a.titleWidth && a.stationTitleInsideWait++
            }, 300) : l.css({
                width: "100%"
            }))
    }

    function L(a, b, c, e) {
        var f = (b.thumbsHolder_ThumbHeight + 1) * (b.gen_total_images - c.numberOfThumbsPerScreen),
            h = 0;
        e.stop(!0, !0); - 1 == a || b.isCarouselScrolling ? !b.isCarouselScrolling && b.gen_total_images >
            c.numberOfThumbsPerScreen && (b.isCarouselScrolling = !0, h = -1 * parseInt((b.thumbsHolder_ThumbHeight + 1) * b.current_img_no, 10), Math.abs(h) > f && (h = -1 * f), b.gen_total_images > c.numberOfThumbsPerScreen && c.showPlaylist && b.audio6_html5_sliderVertical.slider("value", 100 + parseInt(100 * h / f)), e.animate({
                top: h + "px"
            }, 500, "easeOutCubic", function() {
                b.isCarouselScrolling = !1
            })) : (b.isCarouselScrolling = !0, h = 2 >= a ? -1 * f : parseInt(f * (a - 100) / 100, 10), 0 < h && (h = 0), e.animate({
                top: h + "px"
            }, 1100, "easeOutQuad", function() {
                b.isCarouselScrolling = !1
            }))
    }

    function M(a, b, c, e, f, h, v, l, k, r, m, q, u, A, w, y, n, p, g, t, C, B, d, x, E, D) {
        e.width(c.playerWidth);
        c.showOnlyPlayButton && (a = "none");
        "none" == a ? w.css({
            width: "0px",
            height: "0px"
        }) : w.css({
            width: c.playerWidth + "px",
            height: parseInt(c.playerWidth / c.origWidth * c.imageHeight, 10) + "px"
        });
        c.sticky && c.startMinified ? w.css({
            display: "none",
            top: "0px",
            left: "0px"
        }) : w.css({
            display: a,
            top: "0px",
            left: "0px"
        });
        b.imageTopPos = 0;
        b.imageLeftPos = 0;
        b.frameBehindTextTopPos = w.height();
        b.frameBehindTextLeftPos = 0;
        c.showOnlyPlayButton ? p.css({
            top: b.frameBehindTextTopPos +
                "px",
            left: b.frameBehindTextLeftPos + "px",
            background: c.frameBehindTextColor,
            width: 0,
            height: 0
        }) : p.css({
            top: b.frameBehindTextTopPos + "px",
            left: b.frameBehindTextLeftPos + "px",
            background: c.frameBehindTextColor,
            height: k.height() + 2 * b.playVerticalPadding + "px"
        });
        b.playTopPos = b.frameBehindTextTopPos + b.playVerticalPadding;
        b.playLeftPos = b.frameBehindTextLeftPos + b.playHorizontalPadding;
        k.css({
            top: b.playTopPos + "px",
            left: b.playLeftPos + "px"
        });
        b.titleWidth = c.playerWidth - 4 * b.playHorizontalPadding - k.width();
        b.titleTopPos =
            b.playTopPos + 3;
        b.titleLeftPos = k.width() + 2 * b.playHorizontalPadding;
        m.css({
            color: c.songTitleColor,
            top: b.titleTopPos + "px",
            left: b.titleLeftPos + "px",
            width: b.titleWidth + "px"
        });
        b.lineSeparatorTopPos = b.titleTopPos + m.height() + 2;
        b.lineSeparatorLeftPos = b.titleLeftPos;
        g.css({
            background: c.lineSeparatorColor,
            top: b.lineSeparatorTopPos + "px",
            left: b.lineSeparatorLeftPos + "px",
            width: b.titleWidth + "px"
        });
        b.authorTopPos = b.lineSeparatorTopPos + 8;
        b.authorLeftPos = b.titleLeftPos;
        r.css({
            color: c.authorTitleColor,
            top: b.authorTopPos +
                "px",
            left: b.authorLeftPos + "px",
            width: b.titleWidth + "px"
        });
        b.minimizeTopPos = b.playTopPos;
        !c.sticky || c.showOnlyPlayButton ? (b.minimizeRightPos = 0, C.css({
            display: "none",
            padding: 0,
            margin: 0
        })) : c.sticky && (b.minimizeRightPos = b.smallButtonDistance, C.css({
            top: b.minimizeTopPos + "px",
            right: b.minimizeRightPos + "px"
        }));
        b.frameBehindButtonsTopPos = b.frameBehindTextTopPos + p.height();
        b.frameBehindButtonsLeftPos = 0;
        c.showOnlyPlayButton ? t.css({
            background: c.frameBehindButtonsColor,
            height: 0,
            top: b.frameBehindButtonsTopPos + "px",
            left: b.frameBehindButtonsLeftPos + "px"
        }) : t.css({
            background: c.frameBehindButtonsColor,
            top: b.frameBehindButtonsTopPos + "px",
            left: b.frameBehindButtonsLeftPos + "px"
        });
        b.radioStationTopPos = b.frameBehindButtonsTopPos + Math.floor(t.height() - u.height()) / 2;
        b.radioStationLeftPos = b.playHorizontalPadding;
        u.css({
            color: c.radioStationColor,
            top: b.radioStationTopPos + "px",
            left: b.radioStationLeftPos + "px",
            width: b.titleWidth + "px"
        });
        0 == b.historyButWidth && (b.historyButWidth = B.width());
        b.showhidehistoryTopPos = b.frameBehindButtonsTopPos +
            Math.floor((t.height() - B.height()) / 2);
        b.temp_showHistoryBut ? (b.showhideplaylistRightPos = 2 * b.smallButtonDistance, B.css({
            display: "block",
            width: b.historyButWidth + "px",
            top: b.showhidehistoryTopPos + "px",
            right: b.showhideplaylistRightPos + "px"
        })) : (b.showhideplaylistRightPos = 0, B.css({
            display: "none",
            width: 0,
            padding: 0,
            margin: 0
        }));
        d.css({
            display: "none",
            width: 0,
            padding: 0,
            margin: 0
        });
        b.volumeTopPos = b.frameBehindButtonsTopPos + Math.floor((t.height() - x.height()) / 2);
        c.showVolume ? (b.volumeRightPos = b.showhideplaylistRightPos +
            B.width() + b.smallButtonDistance, x.css({
                top: b.volumeTopPos + "px",
                right: b.volumeRightPos + "px"
            })) : (b.volumeRightPos = b.showhideplaylistRightPos + B.width(), x.css({
            display: "none",
            width: 0,
            padding: 0,
            margin: 0
        }));
        b.twitterTopPos = b.frameBehindButtonsTopPos + Math.floor((t.height() - E.height()) / 2);
        c.showTwitterBut ? (b.twitterRightPos = b.volumeRightPos + x.width() + b.smallButtonDistance, E.css({
            top: b.twitterTopPos + "px",
            right: b.twitterRightPos + "px"
        })) : (b.twitterRightPos = b.volumeRightPos + x.width(), E.css({
            display: "none",
            width: 0,
            padding: 0,
            margin: 0
        }));
        b.facebookTopPos = b.frameBehindButtonsTopPos + Math.floor((t.height() - D.height()) / 2);
        c.showFacebookBut ? (b.facebookRightPos = b.twitterRightPos + E.width() + b.smallButtonDistance, D.css({
            top: b.facebookTopPos + "px",
            right: b.facebookRightPos + "px"
        })) : (b.facebookRightPos = b.twitterRightPos, D.css({
            display: "none",
            width: 0,
            padding: 0,
            margin: 0
        }))
    }

    function K(a, b, c, e, z, h, v, l, k, r, m, q, u, A, w, y) {
        if (!b.showOnlyPlayButton) {
            e.stop(!0, !0);
            a.isCarouselScrolling = !1;
            f(".readingData", h).css({
                display: "none"
            });
            l =
                parseInt(b.playerWidth / b.origWidth * b.historyRecordTitleLimit, 10);
            k = parseInt(b.playerWidth / b.origWidth * b.historyRecordAuthorLimit, 10);
            r = [];
            a.isHistoryGenerated = !0;
            e.html("");
            for (m = a.gen_total_images = 0; m < a.playlist_arr.length; m++) a.gen_total_images++, r = a.playlist_arr[m].split("-"), 1 > r.length ? a.gen_total_images-- : (a.thumbsHolder_Thumb = f('<div class="thumbsHolder_ThumbOFF" rel="' + (a.gen_total_images - 1) + '" data-origID="' + m + '"><div class="padding"><img src="' + a.playlist_images_arr[m] + '"><span class="titlex">' +
                    Q(r[1], l) + '</span><span class="authorx">' + Q(r[0], k) + "</span></div></div>"), e.append(a.thumbsHolder_Thumb), 0 == a.thumbsHolder_ThumbHeight && (a.thumbsHolder_ThumbHeight = a.thumbsHolder_Thumb.height()), a.thumbsHolder_Thumb.css({
                    top: (a.thumbsHolder_ThumbHeight + 1) * a.gen_total_images + "px",
                    background: b.historyRecordBgColor,
                    "border-bottom-color": b.historyRecordBottomBorderColor,
                    color: b.historyRecordTextColor
                }), f(".titlex", a.thumbsHolder_Thumb).css({
                    color: b.historyRecordSongColor,
                    "border-bottom-color": b.historyRecordSongBottomBorderColor
                }),
                f(".authorx", a.thumbsHolder_Thumb).css({
                    color: b.historyRecordAuthorColor
                }), a.current_img_no = 0);
            z.height(2 * b.historyPadding + (a.thumbsHolder_ThumbHeight + 1) * b.numberOfThumbsPerScreen + y.height() + b.historyPadding);
            h.height((a.thumbsHolder_ThumbHeight + 1) * b.numberOfThumbsPerScreen);
            h.css({
                "margin-top": y.height() + b.historyPadding + "px"
            });
            v.css({
                padding: b.historyPadding + "px"
            });
            a.thumbsHolder_Thumbs = f(".thumbsHolder_ThumbOFF", c);
            a.wrapperHeight = a.audioPlayerHeight + z.height() + b.historyTopPos;
            b.showHistory && b.showHistoryOnInit ||
                (a.wrapperHeight = a.audioPlayerHeight);
            a.isMinified || w.css({
                height: a.wrapperHeight + "px"
            });
            a.gen_total_images > b.numberOfThumbsPerScreen && b.showHistory ? (b.isPlaylistSliderInitialized && a.audio6_html5_sliderVertical.slider("destroy"), a.audio6_html5_sliderVertical.slider({
                orientation: "vertical",
                range: "min",
                min: 1,
                max: 100,
                step: 1,
                value: 100,
                slide: function(c, f) {
                    L(f.value, a, b, e)
                }
            }), b.isPlaylistSliderInitialized = !0, a.audio6_html5_sliderVertical.css({
                display: "inline",
                position: "absolute",
                height: z.height() - 20 - 3 *
                    b.historyPadding - y.height() + "px",
                left: c.width() - a.audio6_html5_sliderVertical.width() - b.historyPadding + "px",
                top: a.audioPlayerHeight + b.historyTopPos + 2 * b.historyPadding + 2 + y.height() + "px"
            }), b.showHistoryOnInit || a.audio6_html5_sliderVertical.css({
                opacity: 0,
                display: "none"
            }), f(".thumbsHolder_ThumbOFF", c).css({
                width: c.width() - a.audio6_html5_sliderVertical.width() - 2 * b.historyPadding - 3 + "px"
            })) : (b.isPlaylistSliderInitialized && (a.audio6_html5_sliderVertical.slider("destroy"), b.isPlaylistSliderInitialized = !1),
                f(".thumbsHolder_ThumbOFF", c).css({
                    width: c.width() - 2 * b.historyPadding + "px"
                }));
            // h.mousewheel(function(c, f, g, h) {
            //     c.preventDefault();
            //     c = a.audio6_html5_sliderVertical.slider("value");
            //     if (1 < parseInt(c) && -1 == parseInt(f) || 100 > parseInt(c) && 1 == parseInt(f)) c += f, a.audio6_html5_sliderVertical.slider("value", c), L(c, a, b, e)
            // });
            e.css({
                top: "0px"
            })
        }
    }

    function P(a) {
        a = a.toLowerCase();
        a = a.replace(/\b[a-z]/g, function(a) {
            return a.toUpperCase()
        });
        a = a.replace(/&Apos;/gi, "'");
        a = a.replace(/&Amp;/gi, "&");
        return a = a.replace(/'[A-Z]/g,
            function(a) {
                return a.toLowerCase()
            })
    }

    function Q(a, b) {
        a = String(a);
        var c = "";
        if (a.length > b) {
            a = a.substring(0, b);
            var e = a.split(" ");
            var f = a.substring(b - 2, b - 1);
            "" != f && (e.pop(), c = "...");
            a = e.join(" ")
        }
        a = P(a);
        return a + c
    }

    function N() {
        var a = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var b = navigator.userAgent;
            var c = /MSIE ([0-9]{1,}[.0-9]{0,})/;
            null != c.exec(b) && (a = parseFloat(RegExp.$1))
        } else "Netscape" == navigator.appName && (b = navigator.userAgent, c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != c.exec(b) &&
            (a = parseFloat(RegExp.$1)));
        return parseInt(a, 10)
    }

    function T() {
        f("audio").each(function() {
            f(".AudioPlay").removeClass("AudioPause");
            f(this)[0].pause()
        })
    }

    function N() {
        var a = -1;
        if ("Microsoft Internet Explorer" == navigator.appName) {
            var b = navigator.userAgent;
            var c = /MSIE ([0-9]{1,}[.0-9]{0,})/;
            null != c.exec(b) && (a = parseFloat(RegExp.$1))
        } else "Netscape" == navigator.appName && (b = navigator.userAgent, c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != c.exec(b) && (a = parseFloat(RegExp.$1)));
        return parseInt(a, 10)
    }

    function U(a) {
        var b = !1;
        document.getElementById(a.audioID).canPlayType && "no" != document.getElementById(a.audioID).canPlayType("audio/mpeg") && "" != document.getElementById(a.audioID).canPlayType("audio/mpeg") || (b = !0);
        return b
    }
    var I = navigator.userAgent.toLowerCase();
    f.fn.audio6_html5 = function(a) {
        a = f.extend({}, f.fn.audio6_html5.defaults, a);
        N();
        return this.each(function() {
            var b = f(this),
                c = f('<div class="frameBehindText"></div><div class="frameBehindButtons"></div> <div class="ximage"></div> <div class="AudioControls"> <a class="AudioCloseBut" title="Minimize"></a><a class="AudioFacebook" title="Facebook"></a><a class="AudioTwitter" title="Twitter"></a><a class="AudioPlay" title="Play/Pause"></a><a class="AudioShowHidePlaylist" title="Show/Hide Playlist"></a><a class="VolumeButton" title="Mute/Unmute"></a><div class="VolumeSlider"></div>   </div>   <div class="songTitle"><div class="songTitleInside"></div></div>  <div class="songAuthorLineSeparator"></div>  <div class="songAuthor"></div>  <div class="radioStation"></div>     <div class="thumbsHolderWrapper"><div class="historyPadding">  <div class="historyTitle"></div> <div class="thumbsHolderVisibleWrapper"><div class="thumbsHolder"></div></div></div></div>  <div class="slider-vertical"></div>'),
                e = b.parent(".audio6_html5");
            e.addClass(a.skin);
            e.append(c);
            var z = f(".frameBehindText", e),
                h = f(".frameBehindButtons", e);
            f(".AudioControls", e);
            var v = f(".AudioFacebook", e),
                l = f(".AudioTwitter", e),
                k = f(".AudioPlay", e),
                r = f(".AudioShowHidePlaylist", e),
                m = f(".VolumeButton", e),
                q = f(".VolumeSlider", e),
                u = f(".AudioCloseBut", e),
                A = f(".songTitle", e),
                w = f(".songTitleInside", e),
                y = f(".songAuthor", e),
                n = f(".songAuthorLineSeparator", e),
                p = f(".radioStation", e),
                g = f(".ximage", e),
                t = f(".historyTitle", e);
            e.wrap("<div class='the_wrapper'></div>");
            var C = e.parent(),
                B = N();
            if (-1 != I.indexOf("ipad") || -1 != I.indexOf("iphone") || -1 != I.indexOf("ipod") || -1 != I.indexOf("webos") || -1 != navigator.userAgent.indexOf("Android")) a.autoPlay = !1;
            e.css({
                background: "transparent"
            });
            var d = {
                current_img_no: 0,
                origID: 0,
                is_very_first: !0,
                total_images: 0,
                gen_total_images: 0,
                is_changeSrc: !1,
                timeupdateInterval: "",
                totalTime: "",
                playlist_arr: "",
                playlist_images_arr: "",
                isCarouselScrolling: !1,
                isHistoryGenerated: !1,
                isStationTitleInsideScrolling: !1,
                curTitle: "",
                prevTitle: "",
                cur_song_image: "",
                prev_song_image: "",
                curSongText: "",
                curSongAuthorText: "",
                stationTitleInsideWait: 0,
                audioPlayerWidth: 0,
                audioPlayerHeight: 0,
                wrapperHeight: 0,
                temp_showHistoryBut: !0,
                historyButWidth: 0,
                historyInitialHeight: 90,
                thumbsHolder_Thumb: f('<div class="thumbsHolder_ThumbOFF" rel="0"><div class="padding">test</div></div>'),
                thumbsHolder_ThumbHeight: 0,
                thumbsHolder_Thumbs: "",
                constantDistance: 0,
                titleWidth: 0,
                radioStationTopPos: 0,
                radioStationLeftPos: 0,
                titleTopPos: 0,
                titleLeftPos: 0,
                lineSeparatorTopPos: 0,
                lineSeparatorLeftPos: 0,
                authorTopPos: 0,
                authorLeftPos: 0,
                minimizeTopPos: 0,
                minimizeRightPos: 0,
                isMinified: !1,
                imageTopPos: 0,
                imageLeftPos: 0,
                frameBehindButtonsTopPos: 0,
                frameBehindButtonsLeftPos: 0,
                frameBehindTextTopPos: 0,
                frameBehindTextLeftPos: 0,
                playTopPos: 0,
                playLeftPos: 0,
                volumeTopPos: 0,
                volumeRightPos: 0,
                volumesliderTopPos: 0,
                volumesliderLeftPos: 0,
                showhidehistoryTopPos: 0,
                showhideplaylistRightPos: 0,
                smallButtonDistance: 4,
                playVerticalPadding: 10,
                playHorizontalPadding: 16,
                facebookTopPos: 0,
                facebookRightPos: 0,
                twitterTopPos: 0,
                twitterRightPos: 0,
                origParentFloat: "",
                origParentPaddingTop: "",
                origParentPaddingRight: "",
                origParentPaddingBottom: "",
                origParentPaddingLeft: "",
                windowWidth: 0,
                audioID: "",
                audioObj: "",
                radioReaderAjaxInterval: "",
                totalRadioStationsNo: 0,
                ajaxReturnedRadioStationsNo: 0,
                lastfm: "",
                isFlashNeeded: !0,
                myFlashObject: "",
                rndNum: 0,
                prevVolumeVal: 1,
                myregexp: /^http:\/\/(.*):(.*)\/(.*)$/,
                ip: "",
                port: "",
                mount_point: "",
                now_playing_current_k: -1,
                now_playing_found: !1,
                now_playing_arr_lenght: 0,
                now_playing_arr: ["stats?sid=1", "7.html", "status-json.xsl",
                    "status.xsl"
                ],
                history_current_k: 0,
                history_arr: ["played.html"]
            };
            a.sticky || (a.startMinified = !1);
            a.showOnlyPlayButton && (a.startMinified = !1, a.showFacebookBut = !1, a.showVolume = !1, a.showTwitterBut = !1, a.showRadioStation = !1, a.showTitle = !1, a.showHistoryBut = !1, a.showHistory = !1, a.playerWidth = k.width() + 2 * d.playHorizontalPadding, a.historyPadding = 0);
            a.origWidth = a.playerWidth;
            d.temp_showHistoryBut = a.showHistoryBut;
            a.grabLastFmPhoto && (c = new LastFMCache, d.lastfm = new LastFM({
                apiKey: a.lastFMApiKey,
                apiSecret: a.lastFMSecret,
                cache: c
            }));
            d.now_playing_arr_lenght = Object.keys(d.now_playing_arr).length;
            d.audioID = b.attr("id");
            d.isFlashNeeded = U(d); - 1 != B && (d.isFlashNeeded = !0);
            // a.showFacebookBut && (window.fbAsyncInit = function() {
            //     FB.init({
            //         appId: a.facebookAppID,
            //         version: "v2.8",
            //         status: !0,
            //         cookie: !0,
            //         xfbml: !0
            //     })
            // }, function(a, b, d) {
            //     var c = a.getElementsByTagName(b)[0];
            //     a.getElementById(d) || (a = a.createElement(b), a.id = d, a.src = "//connect.facebook.com/en_US/sdk.js", c.parentNode.insertBefore(a, c))
            // }(document, "script", "facebook-jssdk"), v.click(function() {
            //     FB.ui({
            //         method: "feed",
            //         name: a.facebookShareTitle,
            //         caption: a.radio_name,
            //         description: a.facebookShareDescription,
            //         link: document.URL,
            //         picture: a.facebookShareImage
            //     }, function(a) {})
            // }));
            // a.showTwitterBut && l.click(function() {
            //     window.open("https://twitter.com/intent/tweet?url=" + document.URL + "&text=" + a.radio_name, "Twitter", "status = 1, left = 430, top = 270, height = 550, width = 420, resizable = 0")
            // });
            M("block", d, a, e, F, x, D, E, k, y, A, w, p, b, g, C, t, z, n, h, u, r, q, m, l, v);
            d.audioPlayerHeight = g.height() + z.height() + h.height();
            a.showOnlyPlayButton &&
                (d.audioPlayerHeight = k.height() + 2 * d.playVerticalPadding);
            e.height(d.audioPlayerHeight);
            if (a.startMinified || a.showOnlyPlayButton) d.historyInitialHeight = 0;
            d.wrapperHeight = d.audioPlayerHeight + d.historyInitialHeight + a.historyTopPos;
            a.showHistory && a.showHistoryOnInit || (d.wrapperHeight = d.audioPlayerHeight);
            C.css({
                border: a.playerBorderSize + "px solid " + a.playerBorderColor,
                width: e.width() + "px",
                height: d.wrapperHeight + "px"
            });
            a.centerPlayer && C.css({
                margin: "0 auto"
            });
            var x = f(".thumbsHolderWrapper", e),
                E = f(".historyPadding",
                    e),
                D = f(".thumbsHolderVisibleWrapper", e),
                F = f(".thumbsHolder", e);
            d.audio6_html5_sliderVertical = f(".slider-vertical", e);
            E.css({
                padding: a.historyPadding + "px"
            });
            D.append('<div class="readingData">' + a.translateReadingData + "</div>");
            t.width(a.playerWidth - 2 * a.historyPadding);
            t.html(a.historyTranslate);
            t.css({
                color: a.historyTitleColor
            });
            a.showHistory || x.css({
                opacity: 0
            });
            a.showHistoryOnInit || x.css({
                opacity: 0,
                "margin-top": "-20px"
            });
            x.css({
                width: e.width() + "px",
                top: d.audioPlayerHeight + a.historyTopPos + "px",
                left: "0px",
                background: a.historyBgColor
            });
            D.width(e.width());
            a.sticky && (C.addClass("audio6_html5_sticky_div"), u.click(function() {
                var c = 500;
                if (d.isMinified) {
                    d.isMinified = !1;
                    u.removeClass("AudioOpenBut");
                    var f = "block";
                    d.temp_showHistoryBut = a.showHistoryBut;
                    var B = 0 > x.css("margin-top").substring(0, x.css("margin-top").length - 2) ? d.audioPlayerHeight + g.height() : d.audioPlayerHeight + g.height() + x.height() + a.historyTopPos
                } else d.isMinified = !0, u.addClass("AudioOpenBut"), f = "none", B = d.audioPlayerHeight - g.height(), d.temp_showHistoryBut = !1;
                M(f, d, a, e, F, x, D, E, k, y, A, w, p, b, g, C, t, z, n, h, u, r, q, m, l, v);
                g.css({
                    display: f
                });
                a.startMinified ? (c = 0, a.startMinified = !1) : c = 500;
                x.css({
                    display: f
                });
                d.gen_total_images > a.numberOfThumbsPerScreen && d.audio6_html5_sliderVertical.css({
                    display: f
                });
                C.animate({
                    height: B
                }, c, "easeOutQuad", function() {})
            }));
            q.slider({
                value: a.initialVolume,
                step: .05,
                orientation: "horizontal",
                range: "min",
                max: 1,
                animate: !0,
                slide: function(b, c) {
                    a.initialVolume = c.value;
                    d.isFlashNeeded ? d.myFlashObject.myAS3function(J(d, a, F, e), a.initialVolume) :
                        document.getElementById(d.audioID).volume = c.value
                },
                stop: function(a, b) {}
            });
            document.getElementById(d.audioID).volume = a.initialVolume;
            q.css({
                background: a.volumeOffColor
            });
            f(".ui-slider-range", q).css({
                background: a.volumeOnColor
            });
            k.click(function() {
                var b = d.isFlashNeeded ? !k.hasClass("AudioPause") : document.getElementById(d.audioID).paused;
                T();
                0 == b ? (d.isFlashNeeded ? d.myFlashObject.myAS3function("_pause_radio_stream_", a.initialVolume) : document.getElementById(d.audioID).pause(), k.removeClass("AudioPause")) :
                    (d.isFlashNeeded ? d.myFlashObject.myAS3function("_play_radio_stream_", a.initialVolume) : (document.getElementById(d.audioID).src = J(d, a, F, e), document.getElementById(d.audioID).load(), document.getElementById(d.audioID).play()), k.addClass("AudioPause"))
            });
            r.click(function() {
                0 > x.css("margin-top").substring(0, x.css("margin-top").length - 2) ? (aux_opacity = 1, aux_display = "block", aux_margin_top = "0px", aux_height = d.audioPlayerHeight + x.height() + a.historyTopPos, x.css({
                        display: aux_display
                    }), d.gen_total_images > a.numberOfThumbsPerScreen &&
                    d.audio6_html5_sliderVertical.css({
                        opacity: 1,
                        display: "block"
                    })) : (aux_opacity = 0, aux_display = "none", aux_margin_top = "-20px", d.gen_total_images > a.numberOfThumbsPerScreen && d.audio6_html5_sliderVertical.css({
                    opacity: 0,
                    display: "none"
                }), aux_height = d.audioPlayerHeight);
                x.css({
                    "z-index": -1
                });
                x.animate({
                    opacity: aux_opacity,
                    "margin-top": aux_margin_top
                }, 500, "easeOutQuad", function() {
                    x.css({
                        display: aux_display,
                        "z-index": "auto"
                    })
                });
                C.animate({
                    height: aux_height
                }, 500, "easeOutQuad", function() {})
            });
            m.click(function() {
                document.getElementById(d.audioID).muted ?
                    (document.getElementById(d.audioID).muted = !1, m.removeClass("VolumeButtonMuted"), d.isFlashNeeded && (a.initialVolume = d.prevVolumeVal, d.myFlashObject.myAS3function(J(d, a, F, e), a.initialVolume))) : (document.getElementById(d.audioID).muted = !0, m.addClass("VolumeButtonMuted"), d.isFlashNeeded && (d.prevVolumeVal = a.initialVolume, a.initialVolume = 0, d.myFlashObject.myAS3function(J(d, a, F, e), a.initialVolume)))
            });
            F.swipe({
                swipeStatus: function(b, c, e, f, g, h) {
                    "up" != e && "down" != e || 0 == f || (currentScrollVal = d.audio6_html5_sliderVertical.slider("value"),
                        currentScrollVal = "up" == e ? currentScrollVal - 1.5 : currentScrollVal + 1.5, d.audio6_html5_sliderVertical.slider("value", currentScrollVal), L(currentScrollVal, d, a, F))
                },
                threshold: 100,
                maxTimeThreshold: 500,
                fingers: "all"
            });
            d.isFlashNeeded && (d.rndNum = parseInt(998999 * Math.random() + 1E3), e.append("<div id='swfHolder" + d.rndNum + "'></div>"), swfobject.addDomLoadEvent(function() {
                d.myFlashObject = swfobject.createSWF({
                    data: a.pathToAjaxFiles + "flash_player.swf",
                    width: "0",
                    height: "0"
                }, {
                    flashvars: "streamUrl=" + a.radio_stream + "&autoPlay=" +
                        a.autoPlay + "&initialVolume=" + a.initialVolume
                }, "swfHolder" + d.rndNum)
            }), a.autoPlay && k.addClass("AudioPause"));
            S(d, a, F, e, k, y, A, w, p, b, g, D, x, E, C, t, u); - 1 == I.indexOf("ipad") && -1 == I.indexOf("iphone") && -1 == I.indexOf("ipod") && -1 == I.indexOf("webos") || k.removeClass("AudioPause");
            var H = function() {
                    "" == d.origParentFloat && (d.origParentFloat = e.parent().css("float"), d.origParentPaddingTop = e.parent().css("padding-top"), d.origParentPaddingRight = e.parent().css("padding-right"), d.origParentPaddingBottom = e.parent().css("padding-bottom"),
                        d.origParentPaddingLeft = e.parent().css("padding-left"));
                    a.playerWidth != a.origWidth || a.playerWidth > f(window).width() ? e.parent().css({
                        "float": "none",
                        "padding-top": 0,
                        "padding-right": 0,
                        "padding-bottom": 0,
                        "padding-left": 0
                    }) : e.parent().css({
                        "float": d.origParentFloat,
                        "padding-top": d.origParentPaddingTop,
                        "padding-right": d.origParentPaddingRight,
                        "padding-bottom": d.origParentPaddingBottom,
                        "padding-left": d.origParentPaddingLeft
                    });
                    var c = e.parent().parent().width();
                    e.width() != c && (a.playerWidth = a.origWidth > c ? c :
                        a.origWidth, e.width() != a.playerWidth && (M("block", d, a, e, F, x, D, E, k, y, A, w, p, b, g, C, t, z, n, h, u, r, q, m, l, v), d.audioPlayerHeight = g.height() + z.height() + h.height(), e.height(d.audioPlayerHeight), d.wrapperHeight = d.audioPlayerHeight + x.height() + a.historyTopPos, a.showHistory && a.showHistoryOnInit || (d.wrapperHeight = d.audioPlayerHeight), C.css({
                                width: e.width() + "px",
                                height: d.wrapperHeight + "px"
                            }), t.width(a.playerWidth - 2 * a.historyPadding), x.css({
                                width: e.width() + "px",
                                top: d.audioPlayerHeight + a.historyTopPos + "px"
                            }), D.width(e.width()),
                            K(d, a, e, F, x, D, E, k, y, A, w, p, b, g, C, t)), a.playerWidth < f(window).width() && e.parent().css({
                            "float": d.origParentFloat,
                            "padding-top": d.origParentPaddingTop,
                            "padding-right": d.origParentPaddingRight,
                            "padding-bottom": d.origParentPaddingBottom,
                            "padding-left": d.origParentPaddingLeft
                        }))
                },
                G = !1;
            f(window).resize(function() {
                doResizeNow = !0; - 1 != B && 9 == B && 0 == d.windowWidth && (doResizeNow = !1);
                d.windowWidth == f(window).width() ? (doResizeNow = !1, a.windowCurOrientation != window.orientation && -1 != navigator.userAgent.indexOf("Android") &&
                    (a.windowCurOrientation = window.orientation, doResizeNow = !0)) : d.windowWidth = f(window).width();
                a.responsive && doResizeNow && (!1 !== G && clearTimeout(G), G = setTimeout(function() {
                    H()
                }, 300))
            });
            a.responsive && H()
        })
    };
    f.fn.audio6_html5.defaults = {
        radio_stream: "http://194.232.200.150:80/;",
        radio_name: "Idobi Anthm",
        playerWidth: 335,
        imageHeight: 335,
        skin: "whiteControllers",
        initialVolume: 1,
        autoPlay: !0,
        loop: !0,
        playerBg: "#000000",
        volumeOffColor: "#454545",
        volumeOnColor: "#ffffff",
        timerColor: "#ffffff",
        songTitleColor: "#ffffff",
        authorTitleColor: "#ffffff",
        lineSeparatorColor: "#636363",
        radioStationColor: "#ffffff",
        frameBehindTextColor: "#000000",
        frameBehindButtonsColor: "#454545",
        playerBorderSize: 0,
        playerBorderColor: "#000000",
        sticky: !1,
        startMinified: !1,
        showOnlyPlayButton: !1,
        centerPlayer: !1,
        showFacebookBut: !0,
        facebookAppID: "",
        facebookShareTitle: "HTML5 Radio Player With History - Shoutcast and Icecast",
        facebookShareDescription: "A top-notch responsive HTML5 Radio Player compatible with all major browsers and mobile devices.",
        facebookShareImage: "",
        showVolume: !0,
        showTwitterBut: !0,
        showRadioStation: !0,
        showTitle: !0,
        showHistoryBut: !0,
        showHistory: !0,
        showHistoryOnInit: !0,
        translateReadingData: "reading history...",
        historyTranslate: "HISTORY - latest played songs",
        historyTitleColor: "#858585",
        historyTopPos: 0,
        historyBgColor: "#ebebeb",
        historyRecordBgColor: "transparent",
        historyRecordBottomBorderColor: "transparent",
        historyRecordSongColor: "#000000",
        historyRecordSongBottomBorderColor: "#d0d0d0",
        historyRecordAuthorColor: "#6d6d6d",
        numberOfThumbsPerScreen: 3,
        historyPadding: 16,
        responsive: !0,
        historyRecordTitleLimit: 25,
        historyRecordAuthorLimit: 36,
        nowPlayingInterval: 10,
        grabLastFmPhoto: !0,
        pathToAjaxFiles: "",
        noImageAvailable: "noimageavailable.jpg",
        lastFMApiKey: "6d38069793ab51b1f7f010d8f4d77000",
        lastFMSecret: "5f1bb73c21038e2ed7125c9ed6205cb8",
        origWidth: 0,
        isSliderInitialized: !1,
        isProgressInitialized: !1,
        isPlaylistSliderInitialized: !1
    }
})(jQuery);