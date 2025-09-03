"use client";

import { FC } from "react";
import Image from "next/image";
// CountUp removed - using simple number display instead

interface CounterItem {
  id: number;
  icon: string;
  number: number;
  label: string;
  extraClass?: string;
}

const counters: CounterItem[] = [
  {
    id: 1,
    icon: "/img/icons/ci-1.png",
    number: 230,
    label: "Completed Projects",
  },
  {
    id: 2,
    icon: "/img/icons/ci-2.png",
    number: 1068,
    label: "Happy Clients",
    extraClass: "second__item",
  },
  {
    id: 3,
    icon: "/img/icons/ci-3.png",
    number: 230,
    label: "Perspective Clients",
    extraClass: "third__item",
  },
  {
    id: 4,
    icon: "/img/icons/ci-4.png",
    number: 230,
    label: "Completed Projects",
    extraClass: "four__item",
  },
];

const Counter: FC = () => {
  return (
    <section className="counter ">
      <div className="container">
        <div className="counter__content">
          <div className="row">
            {counters.map((item) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-6 col-sm-6"
                data-aos="fade-up"
              >
                <div className={`counter__item ${item.extraClass || ""}`}>
                  <div
                    className="counter__item__text text-center"
                    data-aos="fade-up"
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={60}
                      height={60}
                      className="mx-auto mb-3"
                    />
                    <h2 className="counter_num" data-aos="fade-up">
                      {item.number.toLocaleString()}
                    </h2>
                    <p data-aos="fade-up">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
