import React, { FC } from "react";
import { DropdownFilterWrapper } from "./styled";
import { Formik } from "formik";
import { DropdownFilterProps, FilterValues } from "./types";
import { Link } from "react-router-dom";

const DropdownFilter: FC<DropdownFilterProps> = ({
  setFilterValues,
  queryString,
  setQueryString,
}) => {
  // const checkboxHandler = (values: FilterValues) => {};

  return (
    <DropdownFilterWrapper>
      <Formik
        initialValues={{
          mac: undefined,
          win: undefined,
          lin: undefined,
          rating: 0,
          price: 70,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setQueryString(
            `mac=${values.mac}&linux=${values.lin}&win=${values.win}&rating=${values.rating}&price=${values.price}`
          );
          setTimeout(() => {
            setSubmitting(false);
            console.log(values);

            // checkboxHandler(values);
            // console.log(values);

            setFilterValues(values);

            // console.log(values);
          }, 200);
        }}
      >
        {({
          values,

          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="filter-form" onSubmit={handleSubmit}>
            <div className="filter-platform">
              <h2 className="filter-heading">Platform</h2>

              <div className="checkbox-block">
                <div className="mac-checkbox">
                  <label>Mac</label>
                  <input
                    type="checkbox"
                    name="mac"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mac}
                  />
                </div>
                <div className="linux-checkbox">
                  <label>Linux</label>
                  <input
                    className="filter-checkbox"
                    type="checkbox"
                    name="lin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lin}
                  />
                </div>
                <div className="win-checkbox">
                  <label>Windows</label>
                  <input
                    type="checkbox"
                    name="win"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.win}
                  />
                </div>
              </div>
            </div>
            <div className="filter-rating">
              <h2 className="filter-heading">Rating</h2>
              <input
                className="filter-range"
                step="1"
                max="5"
                min="0"
                type="range"
                name="rating"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rating}
              />
              <span className="range-num">{values.rating}</span>
            </div>
            <div className="filter-price">
              <h2 className="filter-heading">Price</h2>

              <input
                className="filter-range"
                step="1"
                max="70"
                min="0"
                type="range"
                name="price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              <span className="range-num">{values.price}</span>
            </div>
            <button type="submit" className="filter-btn">
              Use filter
            </button>
          </form>
        )}
      </Formik>
    </DropdownFilterWrapper>
  );
};

export default DropdownFilter;
