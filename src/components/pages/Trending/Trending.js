import React from "react";
import "./Trending.css";
import TrendingCardItem from "./TrendingCardItem.js";

function Trending() {
  return (
    <div className="trendingCards">
      <h1>Trending Articles</h1>
      <div className="trendingCards__container">
        <div className="trendingCards__wrapper">
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://images.financialexpress.com/2021/03/Stock-REU2-13.jpg"
              text="Stock Market outlook 2021"
              subtext="Morganstanley"
              label="Stocks"
              path="https://www.morganstanley.com/ideas/stock-market-outlook-2021"
            />
            <TrendingCardItem
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGBIYGBUZFRoaGBIYERgQGRgZGhgYGBgcIS4lHB4rIxgYJjgmKy8xQzU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHkArIytANDc0ND00NDQ0NDQ0QDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA+EAACAgEDAgQEAwUGBAcAAAABAgARAwQSIQUxBiJBURMyYXEUQoEjUnKRoRVDgrHB8Adi0eEkU3ODorKz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACURAAMAAgICAgMAAwEAAAAAAAABAgMREiEEMSJBMlFhBRNCI//aAAwDAQACEQMRAD8AtSn/ACmrPzMaagzONk3kLyQNNHMj2SkD7pImX3gpyUaPrN2acmOchpzkQzSamxErPPcWejcYq7FVh3JYldgeL/SqhCZD9P1iXHr/AEhePVc941UmVaxP7Q+w4zXcQTXYN6lWo+xoAj9ZEmr47yHPqwASTwJNUmtMVGOuQrRypKn04Ml+KYp/tHczMOxJr7do10TAiz3iZZeuHK2xphwrV1zJ/wAIp9AJBiyAd4YmQfeOSkoVvYl6r4c3gshAye54DfRiJU8mnzI+xsbK31rafqG7GdHLn0U/zEH1Shl2slj78j6iu0C8UvtD8XlXHxfaKCcu19pILCrofKfb7yzdL1d1zOb6xH02qyYXbdZ3o12TiZm22a70KP1EsnTNb9Zp4cc/60kZ/kZaq22dBxvCIm6fqgQL7xrjaKqdMBMnE9E0E3SQSeFZrskxnhE4jYK6QPUaa7jRlg7iQ/QyKaZWtRpeYVoNID3k+qq5mmyc8RSxSmXndOBmq0OIFr9IrryOYYjXPXEcnp7KFI5b4g6d34lOwa5sL0e06r4h0nect8QaWmJlilylMXL0y0dM6uGqjLPoNd25nHdBrChHMuXS+p3XMR6GnTNNqrhlyrdO1d1zHuPPxAa2SmAuveAtqQoonmM8nEr/AFTGGuZtdI18K5PTDfxK+81bPxKVqzmSwjGvYyDH1DOOKH9YtNsscEi4Z2gLasoa3j+Ekf09ZUOr6vIqWztuc0ACQAo5Nf0nvhTSl8m5ua9zcL/X8dtnc++Oi9Y9QSLKkf1m28ehkpx0swIJG2FtEYykSZNVXrPDgBng0i/U/r/0kqmQ+LJH6kR63E2u1WXL5R5cfr7t9D7CMMiAcCgJCpB49ZDpv7DiZntIj0qEVHejz1FXb7QnFkhy9A5VyXZZMeqBHEIx5blbTUVCcesjVaKFYCwrqakGTURO+vAHJlX8UeMVwKVx22VuFNH4a/8AMSRTfYQlXJ6Qp4uK2ys/8QuoB9czJ/dqiH+IFnb/AO9fpJ+idR3AC+RKU+QsSzEliSWJ5JYmySfeEaLUlGBHa5oYqc6RQtcm2dk6Vru0tejzAict6N1AMAQZduk6u65j7lUtoRL09FrRpKhguBwYUJVY0mBuZPFM8ZjOI0eOYHnfiSO/vE/UtaAO8hj8WN3WkA6/VAesF0+u57yv9X6nzx3ivF1BwZXrNqjfx+G3B1HR6oEd4bvBnPOndZvuZZdLr79Y+aVLozPJ8Ooe9E3WFsTnHiTS8Ezo2ofcJVetaa1MuR2tGXS0zk+oWjYhfTeoUQLm/VcG1yIkewYmkEmdQ6P1G6lrwavjvOR9G6h25l30mu8oi9hlz1DRVq1u4e+QQHO8yqpaNvEtMR6rCYAMXPPaOdS0qPX+rgeRDbHhiPQe0CJdPSLN2pW2LeoZDmzbV+VfKPr7mXbw9odijiJfDHTQV3nuZcsCbRG0+9CZ9OvskcwHNqNnJ7Q3M3EV6nmKp9jInZr/AGqvpCseuUiI20wJ7SfDpfvICcjVsoPYiB50J5r7ff8A6zdECkKotz2A7wvU69dOdilTqLRXdgXxacv8q0Pnc32sUOSQODMw6fQrLmWNd+zT4Awpv1eZceM/Ktbs7gc+UDk9j6GLc748xVsGEIro7o+V8gyOqMENIpA5ZkAt+zXVSRcmRCcrKKGRUzZchLtRZkYALRyLvGNk2AAB3WhRke/GmwYUNISCcnxGQptC0uLcApFLyRuFdj3lhY5X1soVmunvZBjZ2tVfITtR1VLtlITeCqJuXazFfM5+XtPH0OXcUXDqmIUuN+XIpKE6lU8weqsaYdr4a5Pk1eR3Vt77gu1AjOqbHdR5ShFgsVFm+80y4nVgzLkGR0vcMqM5xBlABbfuq3FAw/QPJ/s11GPKoyLj/ELlRMbqH3uh3F/LvYsm1bSrAv4ffng9cuUpTlMgPB3IERu44ZNysxINKUuu9QXTZHUtsd1Ztu7ztkdioIUncSq1zzXrJ9Pl87u6o7uVLPwmXaqgBQ6VuAoGztHPJMhrftAun+xLq+haXMVCEYsrLuUKcZVlJIBCqxRxYPyMCK+WVPqfSsuBguReGvY68o9ex9+1g0R7S9Y+mswbIq48iBy66dkx49RjxqGUUVUq1BmYIBTE7xcKzoCgV6y6d6u7eh5iCSLLIByHBLLtu2UNTJupf7Qqomv4yhdF15Rgt8GdE6TrOxuUHxD0JtMwZSXwsfK3BZWIsI5HFkchhww5HqAf4c6l2Unkdpo4cipfwqZIcnZ+mancPrHONpROi63tzLjpMoI4MHJOmRL6DTIcmSbloNqTxFaCANfra9ZS+tdV5IvmN+sZDzOf692Dkm6uLztzPRuf47HDXJmzOSST3nlyFGubygbqraNlcg2O4ll6TrbErBMa9FuzH4HqhHkSqhpl0wZdwqDa/FYP6zTRkxg+OwbmrPR4/OvkzlniXTUSalO1Kzp3ifR8Hic71uORaFT6AtNlKsCJatH1HyDmVBpPjzkCohyMTO6Zdp7RfnDDs0Nz6U+lwU6Uk8mY1ds9JOteytdezOuNiGoymjRuRuokes6X1HQqwoiBp04Ado2L4oXePk9ld8Odd+Edjjycc+0vmDVI43KQZUeo9DD8rw0W4cGpxHyk1/SdTmvTOlVPTOhu8FyYxK/perag0GxmHHU5SQoT/tEuWOkL+GINrOoqnlUW54FR5o9GCvPeBdW0aYynYFtzE8eXEg3Ox+wElQ9A1llAf4l8SXj51eUMMdhiuNAKbK1A0oJCgnjcR6AzXRuiplVnyHTq4RktEytlVRvZGssNzecsSfe6BJGws7M7bW8yj4q7GL48JBKbG7MqIPMBfmJ95HqcwdgVUKAipjG0LWFG4B9eC10TwWC8EK0tzPFaMu651tknx8jhA7F3ACoAuxAQNtKtdwKHPPvQLBYw/wB+9Xyqgi6AP5SOe3I7HjmE6XVOTSsqKmPKQSCERUW3cECw/lNtXfjy1tAz9ZwqFH4nC+wUiFNR8Pf2LsFSy1D6/NXpcLTBTMz9SXE2BPhljm+C7OG2Uw1DoBs2kE+QWbFwrqWv+AjuyHIMOQ6RFJVE+CweyaTkn4KiVbq3VUfNp3+IHKKvxXVHRSw1OTK21WAJ4cfyhvXurafJizJjfc+TUrlUAZOEHx73bkWj+0Ha5LkDk+xxiKbMLLuC5MSOVYq6Kxd1O4hV3DyDi4Yinue3Fnjj1G4H5R6gHyjkm+BEWl6/iGlx4bKZkQJvOPeE/bHJaj1sGv8AEY76Vqd43BkaqG/GzbQSeN6ON+Mk/vAhj6k0hgh+thR0xcEKHBCtTIWDqO5YECz7mwb9QSVSDaxXpBplC6pSfhogCYXwtQZivykqzowAN8g+byMW2hIRy290UI+7YF8gC3vCmxS9yvIHfsW3wIl8HvfPB4JJF13NksK5JYsPm3uBezl0KdBjR8f4d1OzZiTa5pyX+Q0bKK5FrZtHodmoUbXaVtNmKk3XmRuwZD8rfQ8EEehBHpL9rNE2TKmfKofExAZBlZVw5ExuWyMeA6l0dtwI4s1bQLxnofjYPjLy+Fju5s0QrNu4HmKvjyEVwxcRmOuNb+mRaVT/AE26D1IMAb795fej6265nE+ia4o9E8GdH6Pru3M05audFKlpnSMb3Ncy2Iv0Gq3ARsguV6Wg0yq9W0hNmVPqOgDdxOl6vAPaVTqWlowlqlplvxs9RRzjKhRiPSSK1xl1vTevrFWEVM3LPGtHpsVNpE6CzHXTMdGJsB8wv3ln0GLtCwd0dmrUMdaDHZEd/B4gXTcUdpj4E0XR5PP+bKX4l03BnKOqYqcidw6/p7QzkHiPT0xP3jH8p2IXT0VLKOZFJs45Mjiqkk+jMkFOIQt0kbCY+jbmtC7U44GVEZZxAMiwaWmWsdNoBzCjIkQH0m2paR4RAHINx4V9ow02nHcwTGahKZCeBDWhV7GekW5W/ET/ABM7YxyLx4gOOVX9rlFethQnr8/tLRpAFE514i0GTUNuRgu3JqHN7++/atFQTdYm7/6x0LtIo5HtsJRHVDfKub3/ACnaQC5fEfltncEgC/PY4FxFDz7k7fchhYqzxuqyCeHUqDJ9jY0tirNiw7wV3NvdAy5QS3cHYn68+skbCqblqxjQWPRtLZ2n+Jdhr/vHL1sr0+9AKEKWsEq+PNjoEr5XQ4yQSD8tgGwSvN2KIAbw9pzhy5VGQBEyFScis3xEHAKBPlr1v09iDG+fFW6wWKkg87Sw2gI+78jkb0V62l8ZVqNCRY8h/D58W0UMGZxk2sjOEx7V3qRSvXBo0dv1uEB0yhaZAzqh7M6KfeiwBqX7J4UwByipQ3siE5SWIDOLIC8HyHiULQn9on/qIf8A5CdL1+Oi7IEynJkyEhmoIm81RQi9wruf9ZF760dGu9ld13QlXGcmJjSqHKtXmwblUujACwpZdwI4DKQSDE2g1z4XXIlErdqfkdD86OPVWFgj6xz1rqYoorqXKDHsSjjx4d6MwLC9xOxFoE0EHN8RTodG2QkA7cYF5HPypj9WJ9/YepkHNHUOk5WBzFWKIm34GRqKsjouREcXuLLvVT6nuDZctqcYBAVaUgBVJAIVgVOMkcAptcMRexMZHdyYr6J1AfhxlXaBk1CgWEBCHKmnRr3WSqGxx7/eHa3L5CqC2tgF272XTP6lP7ze+Jty92UuF8xAMC6WvRLt+L5UyqVLpupVYHMmVNiuoPlRq2lPRUH1gHSepY8xOJtxyPhY5UYqVQ43I2WABuZMmcn/AAj8sG02oKOWQje5Qs1l95TdstgpGStzU/BZWXcNwJkPQ+jhNQmQHJv3kktTby/kcHyD0c3zxxIfphzPRQcuBkdkb5kZkP3VipP9JZ/D3UrpSeRFfivGF1eYDtuVh/jVXP8AVjF2kzlGBEvYqekytU9tHauj6vtzLbpctzlfQ9fYHMvnStVYHPMdkna2haeuh/l7Sv8AVcXrHYfiLeoDiJn2Nn2UDra+WVxRLZ1teD+sqyiUc/5HrPG7hHqS39GewJUJYugZO0HFWqC8idwy9dOXtG+JYn6c3AjrDL2zy2dfMXdUwWp/Wcl8VaXv9J2fWY7UzmHizTfNH4+00VX72cn1Q5g1w7XpRgNQWSj6KLyN3nmUwTJkmNs3pnZtkeA53m2TL6QLNki2yzE6IMzczEcDvAtRqD6A3PdMpYgtIGb7GuElvoIzwACBaYcQtZMi7exhheU3W6Vd29r8j6gBd20M65XdQfMAbOwUfVhLUrRDrsfmyKS4rIxpOG2ZUxagm/Shpco+7COl9lHMtaI86EB2YqQuHMzUKC0o3/e3DsD7MJp1LMqZFxMQrNhAshSr+Y7lpuGIpTsNbldgCDUN0qK6uxP7Ngm8AWNm/KAoJ5ZmACG/3B7yLXdPGVVZvLmBfzgjy5GKNmo9gqKrLu7ijXMdPoqX+QtR9zpuAIBY0SXNleTudQTyq+Y0SFUtbAk76l92FzQJ+Brxu3Buy2RuHfuTRH5gfzECA78Dr8YEISwVwLBIAH8QssoUG2I5JPMmzj9nk9SuLXq/IbaxxtQZ17m/Qgd7/NQn/oJ649HNzxLLqPCSI7I2dtysymsDMtg1wd0rTnidNz5HTLqQdqY31GpId3yBWLuFZV2KTupLBrimh02vQuUn0yuYvDLEEYnV2AvaynG5F15QxIPPHcRSmpy4nJR3x5FJDAFlIYcFWU96N8ES467UZ3DY1QOz4y6ENmVTlZmwgqHIpBiLOSQBYs1xKd4n6gMuqyuh3KzKN3o7KioX/wARUtf1nSqfsitIt2k6yMmjLtWMplRM5VAFV2ZsuLNtA+VmQq4HNqCvqCwZGdm2sKpSr78YQIwUCma1FqqqQAVekcbWHFX8KPkXBqClDI+TSpjLAFd6fFyOWBBsKisTx6iuSJadNrmNhm8/IV1REbceH8o4B8h49CpHmKvQ3tLo6Pk+zZtLlQo7lqLgAq+I82e5IBXse4HYwvpl/ExfMTuPdrHD4vm9feq7+vaCax1ZAgUmnDHjaAQm00L4H09KrtQEnRsB3qwUDbuPqbO2hXt5ivMXr7HfWii+LDeryf8At/8A5JE9Rj17KH1OZh8pyOB/Ch2j+ig/rF8uwtSkU6fyY86BrirBTOjdI1psTkGJ9pBl76B1DcBzLOOt9MTSOo4c9gSLVNYMU6DXcCEvqAYDlphw+0VzrxoGVK5ZvET+WViZ2f8AI9b4q/8ANG6mMulZaaouWTYHpgYmXplq5VTpnSek5rAlg0zSj9F1XaXHR5OBL8PaPMebi40HZxxKH4r0vf8AWX4DiVjxNgtDLGF6ozK9HB+t46cj6xNLP4lw05lbIhUuyU+jvuZu8W6jJUYnAxmr6RR37zCabPQzUyJHdj2EjOlJ5YmNnQDtAs7wdJDk9gXwBfaT40AnhM8Vh3uRsYloPWE44vTKPeFo59BOTF2ug9K9Yp65gYuCho5sZxAg1WoQnJg7j8xBT7MfePNDo2fk8CE9V6OuTC+MGmItG9VyLyjD9Y+ZetlDLS9bKd0xuUsvtYI6Et5xuRkazQBUMwIsdiG9BZu4D1GxtpUiiu35lq+6cFhZ5t3PlHKvPmbbv2kZA9uN7D4edGVsiBSDwfM4A7hm/wDLEZI68Y1SiBYCqKRaDKCADtbhvTn4fNnyGU9dCKXLv7Jci2EUbtxayCCQxD0r2Ryd3fj9wmrCPznW+IihzYMGPEuAvmVaVt3w2tLsseSoHP0l+yZgFUbiCpJF1sA/e3c1Q45v8tkhvOv1aMNx3WeSqsmLaCL3BmZWarrnmjx5jdOl9ehfr7OWmWLL4uzNe9MTWxc+XIPOSxJ8rj1Zv5xh49wooxBVRayagHaoU0FwkbqA58x/2Yz66a02ZapRg0RUUoW2OmJqh62f5w9ppdHa1sqOo6zmcFF2oj/MmJAgf+OvM/6kzbSeHc7De6/BxHjfltF9vKp8zn6KDLP4c1ATQg8gu+oXcCVIIXHtJcEEVu4hSafT7/iBMgKg27F3zP8ARA5O0gAm/Y8WARO562juOzTTYExoMSbgo5JPGQ7iLcheVdiihVHI2LXKkMp61qMrMuHErIj1teiqstAjYwFbAByVNELx5VUR9ixYjtDOwXl8hruCB5Af3ueW7V24ozdmLt8R9/wEIVmoWmIcICFAN2VXyiwW7C2EHkS0CZNHhXEPlZ8jJjUl2+Ijq4XceSFIKuCSKLFbu4fhyfh01WoO3djRE8qhFbVud9FUZkLLvxqSvF7q4nra11fcquud2XDp0VEG9E5QZWs/szvLWACGRhztFIfG2rVBj0CPu+Db6l/39W/LX71ub9W+k6U66BqkuyoL/v3nsyZLZWPDG/Q9ZseieIpmyNRsd4Semczqug1NjvDxnlP6Frtyd+Y9GoljprYML5A3XXtYhEa9Xe1ilDMnyF8j13iveOSZRNhNRNjK5cQ46RqaIl66XqbAnMsD0RLj0XV2BLWCvoy/8hgTnki8434i/rWPchk2kyWJvq18hEty9M83a0cO8YYKYn6ylOeZ0nxzp6Dfec1yHmOoWvR9EZXEXanLCNQ8CyITMNtnoMcr2yHJki3Nm5oRk+m95E+IA9oGmPX8Fex27CEYumE9zGGJQJj6tV+8jSJ2yfBpEQQrTMCe0VpkLcniHaZgISfYu5eu2PsOSTM/HMVJmqatqSeLjeWim8TbFXXNKQ7Z8SlrAGdF4d0U2rp7ZEPIPrXtYKFcgTY5behDVkVthKoXdHVT8rJuKulmqP5SLu2mXmLeqdEIY5NPttjuyYiSuN3HZ0I5R/Zgf6WDCXXZFTxfQl02qDqWYgObegKCjzFkLD1BD1wLF0bJgjNwNhG2gRR8m2jTKw4Qc9x5R2Vb5MK4Aq5VRHbISxONlVNSgKjyhFADqCpIZLPN7V22fc2v3IHa9rFLorvV7RnVCwIB7jYaqjY4BhpuRTSp9GrojhEyYQ6jIdgJfj4m1WA2MGZfKh3MB2+sN1mnAVt+Msj/ALNkIcgYMK5Sm0CmJvT4ebN3UFDo5AXcrMykg7i2wllLkhb+YADmrvkTVNOlgb18zOtFjYKJuPZz60KJHe5PL7J4ni0qjHjQIiM7KF+ICXZUVz5/mU7Qe4ngPqTf2ujRuueRX7p5HdTxUIyYEVQXLbNrs1q7BSu3adw3AA7mBN8bfrDMWnNq6Ku10enyOD50ceYLwSAD3J7LYq+ZVfo5ykuyHTYQbd32Y0NO3qD83FgAnz7r478C9wI6alyFLJWm27cToynO28EY84xigWBF7QRtbnsvG+jx5M2ZXTGc+UJiZW3FcGHIAUfG7XtKAKGHBIDkEczTq3XcWj4VxqdeAVDLf4TTC+VQE2TfPf2s1UlJ0/2KqkkS9U6iuhT4jKo1+RWGDEoXZpsT8s7ACviNwSfUzmZykksSSxJJJNksTZJPqSbMzWap8js+RizsbZm7k/79JAGlrHHFf0r1XJhitc2qCo8IVoYJ7MqZMknB/SdUUfvxLYmqFd5RLjTT63gWYarRKWmWLW5bWA4XuDNrLFXPdM8oeR2z0vh38Uhghm0jSSSsaSPY46JqqNGJpvp8u1hCiuLAywrnTOpdJz2BG+TkSo9D1N1zLSrWLmintbPJ+Vj4W0c58e4PK3E4/l7zufjzDaMf+WcNzJ5j946vRS0fQBx+88dPaEZBzI2mMbypgWWBu0N1IijWZa4HeLofPoi1es28DvI9PiPdu88x6fmz3k2R649TBb2MlE65OaEKxNANMsNBnJk0thJySbTnmAh4Qj1Dl9iqnroZ45Or2RF+PLCtM/NxqeyrcnvXem4cuItkRdy8q/yuv+IcyiZdGcgrKi5SDVuHLhR2rMNr9vQky06vU/Fav7tT5RfBI/Mf9IRhRQOAIFU9/EmcUzPyW2VXR6JggRBkCq1qGG9ANzOR2Rtu5mNEnvGGDoWVSGX8OHDM6scLKQ7rTHh+xoX9hLCre0nxrOTp/YFTK9IrI8K2NrOoXY+MFUyFxjcsWCs7kc7z3HFD2jXReENNSK+7LsFJvNoPSwigLZ9SQSY6xpCcSxyTa7Yi2vo5f/xFw6/AAu5V0TcL8FSig+i5PUH7GjOcVPpDrGlXPifE4tHRlP6jg/cGj+k+dNVp2xu2NhTozI38Skg19OJZwta0VsifTBWSRNCmEHyLHCzVWkqPIJ7c4gOVrnsFx5IQDck42M8Vqnkwzjt9k65eYdosnMVKYXpn5lXPLNrw8m9FjxtxJhA9M9iFoZUNyHtHs1cTaeMJwTLD4d1fYE8iX/R5LWco6Zn2OPYzo/RNRY7y9grcmF/k8P8A0gTxnjvEfsf8pwTUp52+5n0L4oS8J+04Brk87fc/5y3v4owX7O+MOZq4hEF1LgCY7Nme3oV9QyAcesXJh/Me8IYb2s9vSSnHEN7Zdn4rQHVTXFjs2YQ+OzUmRAJ2gtkSpUjdpORBck4KTYPJkyQDfMGorvJRLWxuc9DvPPxR2GvXj9PWV3U9SBcIp5jXTcoJLdC+EhOJodieLlMnx5JJFzsaoYXjizDmhqZhGSU7loYY4x0mMd4nTOPeevrgoJ3bUF7mPoBHpoq1jpoL6z1HFhxvlc1jRSzfWhwB9SeP1nzj1PWHNmyZmFNkdnI9BuJIH6Sx+OfFh1TfDxkjSofL7u4/O309pUCZYidLbK1vXSN54RNd0y4wAhdZGZO0hZZxB4DJsbyCegzkzg4NPYNjeTgyUcjJNhaQmbI0DJO0W/Gyca0PtA/EaIZX9Bk5jzGZn0tM9L49JpMnE8InomGCWSMGufWXbw5rLA5lK2xv4e1O1tsdgrjWin5ePnDRf+uc4GP0nz91hCMzj6zvubIGwN/DOEdfH7d/vNOfR5K5400d3dom1+aztE8mTFyfibeFLZpix8TcrMmRa9Dvs1RJ4RMmSfo4iyCC5xxPZk4bPoBd4p1+q28z2ZJAqnsE8L4TlyM7HyrX8zLoiUK9JkyTf5HQ+jyYGmTJAw3TJUk/GAdz+t8TJklAUka/2qDwoLt6AA8+8VeKMr/g8z5DyVCKo+VdzAX9TUyZGx+SKuT8Gcs3TWZMmiYjPZkyZIOPJq6zJkmfRyIJkyZIJPQZNjeZMhI4nuZMmSWFL0+grTPRlh0z2BMmTPy+z0XhU+IWhnpmTIk1fo1M9wPtYH6zJklewK9F60Gq3YyPdf8AScm8R4v/ABDzJk1p/BHk/OlLM9H/2Q=="
              text="Forecasting Bitcoin price using quantitative models"
              subtext="Cointelegraph"
              label="Cryptocurrency"
              path="https://cointelegraph.com/news/forecasting-bitcoin-price-using-quantitative-models-part-3"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://images.moneycontrol.com/static-mcnews/2020/01/Sensex_BSE_NSE_Stock-market_bull_bear_Gold-1-770x433.png?impolicy=website&width=770&height=431"
              text="Trading expensive options amid COVID-19 uncertainties"
              subtext="Moneycontrol"
              label="Options"
              path="https://www.moneycontrol.com/news/business/markets/trading-expensive-options-amid-covid-19-uncertainties-heres-what-you-need-to-know-5082561.html"
            />
            <TrendingCardItem
              src="https://www.syfe.com/magazine/wp-content/uploads/2020/04/Blog-Banner-Time-to-invest-55.png"
              text="Retail investors snap up China's first batch of Reits"
              subtext="BusinessTimes"
              label="REIT"
              path="https://www.businesstimes.com.sg/real-estate/retail-investors-snap-up-chinas-first-batch-of-reits"
            />
            <TrendingCardItem
              src="https://www.securitiesfinancetimes.com/securitieslendingnews/images/FridayJune420211622806612.jpg"
              text="RMA and State Street release ESG data white paper"
              subtext="Securitesfinancetimes"
              label="Securities"
              path="https://www.securitiesfinancetimes.com/securitieslendingnews/esgarticle.php?article_id=224777&navigationaction=esgnews&page=1&newssection=ESG"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://image.cnbcfm.com/api/v1/image/105950083-1559732787601gettyimages-1140423073.jpeg?v=1622834318&w=900&h=506"
              text="The second-half recovery is underway, and these are the top stocks to own, analysts say"
              subtext="CNBC"
              label="Stocks"
              path="https://www.cnbc.com/2021/06/06/analysts-like-top-stocks-for-the-recovery-match-booking-holdings.html?&qsearchterm=stocks"
            />
            <TrendingCardItem
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i7yNjkjkKGr8/v1/1000x-1.jpg"
              text="DBS gets licence for its majority-owned securities JV in China"
              subtext="BusinessTimes"
              label="Securities"
              path="https://www.businesstimes.com.sg/companies-markets/dbs-gets-licence-for-its-majority-owned-securities-jv-in-china-operations-to-start"
            />
            <TrendingCardItem
              src="https://cdn-japantimes.com/wp-content/uploads/2021/05/np_file_87436.jpeg"
              text="Tesla (TSLA) Discloses $1.5B Investment in Bitcoin"
              subtext="Investopedia"
              label="Cryptocurrency"
              path="https://www.investopedia.com/tesla-tsla-discloses-usd1-5b-investment-in-bitcoin-5105078"
            />
          </ul>
          <ul className="trendingCards__items">
            <TrendingCardItem
              src="https://cdn.benzinga.com/files/imagecache/story_image_685x375C/images/story/2012/facebook-1084449_1920_14.jpg"
              text="Facebook Options Traders Forecast Blue Skies Ahead"
              subtext="Benzinga"
              label="Options"
              path="https://www.benzinga.com/markets/options/21/06/21431820/facebook-options-traders-forecast-blue-skies-ahead"
            />
            <TrendingCardItem
              src="https://images.cnbctv18.com/wp-content/uploads/2020/11/asianmarket4-768x432.jpg"
              text="Asia shares hesitate, China imports underpin resources"
              subtext="Reuters"
              label="Stocks"
              path="https://www.reuters.com/article/us-global-markets/asia-shares-hesitate-china-imports-underpin-resources-idUSKCN2DJ00P"
            />
            <TrendingCardItem
              src="https://images2.markets.businessinsider.com/60ba59dd93c6fa00195e5388?format=jpeg"
              text="8 experts weigh in on what Coinbase adding dogecoin means for the meme cryptocurrency"
              subtext="MarketsInsider"
              label="Cryptocurrency"
              path="https://markets.businessinsider.com/currencies/news/coinbase-dogecoin-price-cryptocurrency-meme-token-experts-elon-musk-2021-6-1030497107"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Trending;
