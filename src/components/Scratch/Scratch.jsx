import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./scratch.css";
// import { Margin } from "@mui/icons-material";
function Scratch() {
  return (
    <div className="scratch">
      <Header className="header" />
      <div className="wrap">
        <div className="left">
          <div className="col-lg-12  col-md-6 mb-4">
            <div
              className="card cardele"
              style={{ display: "flex", width: "100vh " }}
            >
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
                style={{ width: "100%" }}
              >
                {/* rome-ignore lint/a11y/useAltText: <explanation> */}

                {/* <a href="" /> */}
              </div>
              <div className="card-body" style={{ zIndex: "1", width: "100%" }}>
                <h5 className="card-title">Billie Eilish</h5>
                <img
                  src="data:image/jpeg;base64,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"
                  style={{ height: "100%", objectFit: "cover" }}
                  alt=""
                  className="img-fluid"
                />

                <p className="card-text">
                  Angular is an application-design framework and development
                  platform for creating efficient and sophisticated single-page
                  apps.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=QDFiIGTDM6k"
                  className="btn btn-primary"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className="col-lg-12  col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                {/* rome-ignore lint/a11y/useAltText: <explanation> */}
                <img src="" alt="" />
                {/* <a href="" /> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">Billie Eilish</h5>
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVEhgSEREZEhgYGBgZGBgZGBoYGRgZGBgaGRoYGBgcIS4lHB4rHxgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhISQ0NDQxNDE0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDU0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAQIDBAYHBQUGBwEAAAABAgADEQQSIQUxQVEGImFxgfATMkKRobHBByNScuEzgrLR8TRikpOi0hckQ1NUg7MU/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAJBEBAQACAgEFAAIDAAAAAAAAAAECEQMxIRIiMkFRBHETFGH/2gAMAwEAAhEDEQA/APXYkUxIBEhCARIsSARIsSAQhEMAiShjdqImg6x+ExMTtlyLhrC3s6cJxy58cfHbpjxZZOqiTiWxlQkk1G4cTzNx3249sExtRQSrtcG282Phfv8AJlP9mfjp/gv67aE5XDbbrLo4DXJ0It2cN+vwmthNuU3tm6hIHG4FwCNfGXx5sb/xzy4so1IRFa+oNxFnVzEIQgEIQgJCEIBEMWIYCQhCAQhCBZMSLEkgMSLEgEIQMBIQiGAjMALmYe09pmxCnKNfGWNqY8JpbMb7hOdxJYsSQDfhy46e/wCczc3Jb4xaOLj+6hfE3N7cN57omftv5PnwkqUy/sG/ZfxN9LSzTwjWt6PfxJv8+EyarVIzypubKb627vDjDmSCRy1v4fGbNGg66CmB+9+mkmYOD+yW3eL92g1jVQykTs87wff8oNh9xHHQnkLLe1ueUTVzHimnL+REciAg6W831EQuNjNwOMemTZ9CBcWJUHXnxt8AJ0OA2itTq+q+/LzHMTn8TSsdOzz3SIMRqNCDoeItu3ePunXDkyx/pxzwldnCZuy9oZxlb1hx/EO7nNKbMcplNxmyxuN1RCEJZUkIQgEQxYhgJCEIBCEIFiEDEkghCEAiRYkAMZUeyk8hHmZPSHElKYVfWcgD3gfWVzuptbGbumdUXO+a+gvbx3n3/KSLQB3yNDbSWaZmO16GGPhLSpgbhJgIxTJVEROQERo+NYyaqhZI0yS8Y0osqPTu1j4RmIwoOo0vvjq/rST0nAeHfI0plGZ1kYMNDe/gPpu986nC1w6Bxx+B4iYr0w2o42t7/PulzYzWzJyNx3bv5Trw5ay1+uHLN47/ABqRYkJrZhCEIBEgYkAhCEAhCECxEhCSCEIQEgYQgJOc6QPesi8FsT7mP1nRzltsn/mPPJZy5b4deKe4qNLdPnKKS7TaZK9GdLCyVYynJVEtHPI0mIxkhFpG0mxEpgjTH2jWEouo4prbt8i9Jxlh9TrwkLpvIkIyxKa1tOF/hxl7BN94DzBHwvr2zIqHS3aPr9Jb2TVzMpvfv7v1lsL7o4Zz210IhG3jrzcxiEIQEMSLEgEIQhIhCEITwiQkghCEAiQhAScrtj+0t3KfeP0nVGcz0n6j+k5p8VJ/3Cc85uOnHdZIUYC1zbvlkONdZx1GnWrFnRl3+1f5jdGPsjGEX9Ig52qWHheZfS3zJ3dGuOcnFff3zgcNiMRQIFYGwPrDUd952OCcOgYbiJXzFtS9rVXGKB1mA8Zl4rpJRTQNm7RulTbOFZtAZmJsyklmemajX0zXC37rXJ7ADJl2m4ydNJNuvV9Tdwt+mpltMa49c6do+sxcd0mTDMUqUShA0smUMSBZEsTdiCd4A0PHSTUNvLUUEqaebQB1te3AMCRLXC625zPG3UbNOuGNwb3krCVMNTAW4046D5y4N0ovpXrL1dORt8I3ZRHpVt+I/M/pJqi9U24A/In6GN2bhWDCobAakDUk8rxO5XK42yx0d4syaG2Eap6LOpbdYHUHlyM1AZtxymU3GLPDLG6p8LxoMWWVEIQgEIGEAhEhCE8IkJIIQhAIQiGQAzB6SqrBRcXFwRfcGtv5bpumc5tymRUNxcOuYHtHVYfFT+8eUpn06cclyci9V0qejSnmN9GYjIo52vqb8vpEprtBnKB0yk2DWVcqhla6gghiVBUht2a43TbfAZrG9j533lrDYHLvf3C04TKT6bPRv70q4bAtYCoytp17AjrW1K2Ft/MXmnsmmEBRfVBNu6LiCFXQamJgW1NpzvbtJ4WaiXYHkbyJ8MGOfKL8yL7v6/GPqNZpLRaRL5LLJtm4vZ2c3emKmgF21I3ngR5J5yOnsw6BlVQDoALab+HbN03EiJ5y+VquP7pClIAWAiHSSMZWepOa6OrVy5h2E/T+UXEszKlNTlzesRvCAa25X0HiZTd8z5RrfT3/AKS4MAVqGoGzHKBl5LxA8dY1VZraHDYFVqWVQLG4Np0imZgQF1I9oEHw1PwvNEGauGeKzfyst2RJeLGAx152ZDrwiQgLCESAsIkIE0IQkoEIkJAIGESAGYvSE2RD/ft7x+gmy0x9vE5BpfRh46fQGVz+NdOKbykZ1F9JbQ9kysJVuJpU30mG9vTx1YixusmwNBhraV8dUy0y3kXNryHZm30dOo2ZlNmXcQR2HcJMmzLx00a6GLhm17pz22Nv1VdUo4Z6xNs1jlyAtbkcx0Ok1tn18zEbjlBI8Y152nuNjNIHMC+kiZpOVVxxNdtJQxL8JcfdM+ouplZPJl0XZdO75jL2EqPmd3UqCcqgg7r2B8ZBs9Lm3Zf3afWXzYasb23CWvas6Ooavc7lFh48fhLimVKO7Xedf0lhDNeE1iw8uW8rYmBjgZGDHAy7kkEWMEdAWEIQCEIQJYQhJQIkISAQMIhgI0zNtA+jFhrmFuzQzRMhxNIOpRtx5bxyI7ZGU3NL45enKVxFFijkHn85qUH0lXamzWpEO1QOGOUdUqRoSL6nkfdH4RtJkyx1238ec+lzEUg6FDoCOGhmWvR1GYNmYMNziwPjYTVqVAouxsJSTb1JWyscvnhzlJK633Vo4PAKi6EseJO8yalSVbkAC++wmcdu0/ZOb5ySjtlDo/UPDNpfw3xpPpykaJiFYxK6uOqwPcZLfSQhWqrpKdUcZdqtKOIfSTEZVWSsy1EyHSxDX7SNfhNSmSTdjf4CZOFa7k8tPn/OaaNNHHjO2Tl5LPbKuo0nQyojSdDOrMsqZIDK6GSqZZCQRwjViiA6ESLAWESECWEIQgXhCEAMaTHGMMBDImMkaMaEs3bGHL0WVRdh1l7WXWw7xceM5rZ+IBG+di84jpDS9BWDp6tTM2XkRbMB2da48ROWeO/LtxZaumhilDrYk2PI2+MZhsNRFgQLdpv77ylh8VmXTlJ6eC9Idd3f9Jm6b8cvxppWw9/2idwIkish9WxHhK9PYFM6ka9wlmnszJ6rfCLfC3qv3U62tppGtVtIxSfnIayWG+0pEUVKl5k7RxYUdskxOOVNDqeXOZFBGqVAx11l54c756a2z1IW53n6zTptMjaWNXDorvomdEY/hD6Zu4G1+y80qbTRx/Fj5vkvo0nRpUQywhnRyWkMlUyuhkqGWE4jhI1MeDCDosaI6AsIkIE0IRIQWESEAMaYpMaTAa0Y0c0hrVFVSzsFUb2YgAd5OghJjmcl0zw2cJbQgPY8j1Jfx3S/A0wc2LRzyQmoe7qA28ZzWB2+mNxNYopVUSkEVrXy9fMxAJAOYqNOBEpnv0104vlFfYm0AHNKpZW9wPd38p1dCoq7jYTjtv7LPrpow1uJm4TpK6dSoua2l72Nu0c+2Ztery2S+nxXqDVtL5rRy4sGwvPOT0mJFk9zG/w3yFtv1QOAkemr+uV6ZUxKgb5zW2dsjVUNzz5Tm32rVcAM5tyGnvhQps51ETFFy30t0Azm5uSZ0eAw2Ve2V9l4MAXImuABIqcZpzfTylmwFX+7kb3Ol/heV+gu2PTUPRu13pWUk72T2GPboVP5b8ZpdKVzYOuOdJ7d4UkfKeXbA2mcNiEqjcNHA9pGtmFvcR2qJp4fOOmPn+W3t9NpZQyjhqgZQynMpAII3EEXBHhLiGXclpDJlMroZOsITKY8SNZIDLIOEWIICAt4QhAmvEvEJnOY/pvgKJytiQ5/uKzjwYDKfAxpDpLxLzzban2r0l0wmHeofx1DkXvCrcnxKzlMf9o2PqerUWiOVNAv+pszD/FJ0PcatRUUu7BFG9mIVR3k6Ccttbp/gaNwtQ4lh7NIZl/zDZPcSeyeJY3aVasb1qz1De93dmsezMTbwlRzzk6Hf7Q+0/FOx9DTp0V4dUu472Y5T/hnH7V2zWxDZsRVeq3DO2i/lQdVfACZ14wnjAkzTT6MbT9Bi0c+qTkf8jEC/gQp/dmQTGqxFyOUizc0nG6u3u1agGWx1nF7c2R1rqLTstnVM9NTzUfEXEZjsIGU6TD1Xpa9UebJslm3TXTY7FQCN06DDYUA7prUKKkbpNyVxxjmaGyLb+c18NgQLC003pDhaJRTX9JXa8ieklhGu9pMw0lOu9vOsQyumX0gqfcVfyP/AAkbvGePk2Pn6z1PpO9sLWJ06mUd7nL9Z5W/nh+hmrinhi575ekfZ5t4MgwlRustzSJ9pN5QHmupA/D+WegUzPnqjVZGDKxVlIIIJBBGoIPAz0Lo509OlPGDMP8AuKOtbm6D1u9dewzpY4yvTEMnUylhqyuqvTYOrC6spuCDxBG+W0MqlMpkgkSGSiWQeIsbHCAQhCB4L0i6ZYrF3Wo/o6fCklwvZnO9z3+FpzhN+2ITGkyyDrxLxIQAmNjohgNaJBjr574LARoi/SOMAN/dA9o6PP8AcJ+RfgBNkC85/oziFqYWm6m4IsewjQg9oM6Ki1xMGfb0uO+GbXw1muNPl+nfI1Yg77TSxNPiJRyHlIW0ejEiW8NTsLytSHZLpNl3QnSOu/bM9xdrSy+u+GGp9c9ktFMnKfaD1MGFP/UqIvD2Qz8fyieZN58jSeh/aniR9xSFrgu51Fxoqi4/ePuM88PnyJr45rFh5b7iAxytbURq+fP6R3nhLubodidJa+Eb7lwUJu1NhdGPEgb1PaPG89P6N9McPirUz9zV/A5FmPHI+5u7Q9k8TR9BJAZGh9IpJVM8d6OdPq1C1PEXxNPdcn7xR2OfWHY3vE9R2Ltqhik9Jh6ge3rLudPzodR37jwJkWJagjhGCOEBYQhA+X4RCYksg6EaTCAEx0bHQIY4GNbfCA68eqFg1raKW1YLoNdM1rnsGp4SMGW8ACTWsGOWi17Ir2u6KSxPqL1vWGo8Yo3eg+3RhqnoqptSqEZifYfcH7twbsAPDX1ugljPArTvOhPTEIFw2LfqCwp1D7A/A5/ByPs8dN3Dl49+Y08PLMfbXpFVdJSqUr8JpPYrcG9xcEbjfcQeUipU815k+23tUpJrJK44SVKfWi5MxiFiutPS8MOgFz3/AAltk6s5PpJ0lSnTr06LgvTQBmVk6lRzlRQreuQblgBoFN9bgdcMbldRxzymM3XnnS7aPp8Y7hrqpyJZgwspIOU7ipfMRbgRqd8wiPP9I86aDhYcOHfGkedPpNkmmC3d2QefJijz5vAed8PPnSSg9T844SJT85KIDw0sYTFvSqCpSqNTddzKSCPESrHXgep9GftHVrU8eAh0ArKOoeHXQerw1GnYBrPRKVRXUOjB1YXVlIKkcwRoRPmpTN3o90lxGDa9F8yE9ak9yjdoF+q3aPjukWD3y8J5j/xSf/w1/wAw/wC2EjSXlkI0mF5ZAvHRqx14BFJiCBMkNYXjSpjoSAxDrL2yKYIr3Cn7hiM2bQipTN1y+1a9r6c5VVL8LnlzPACXrHDVK9LMGNnosVNgbOubRluR1CNw37xAqwIkmUFM3bYg87Hd2aGMy/0gbWw+lWJwoyI+ZL/s6gzIOeXingbdhncbM+0bDH9vTqUTzFqiX7CLN/pnll/CGWUy48cu3THlyx6r2vD9McAwJ/8A1qpPBkqKfisTEdNcAi/2nOeSI7H+G3xnimWASUnDi6X+TlXbdIPtBqVQaeFU0EOhcn7wjsI0TjuJPIic9jmKUKVG+rXxDi6MuaoMtLKy6i1MXKk6Fz4Q7KwqvU64bIitUqlArMKaC7EBiASTZd/tCV8XiWq1HqOArOxZgoCrc8FUaADdbsnTHGY+I45ZXK7qq+868fO+J54RTvP6combt+IllRbzpDz51hft+MF18iA5Re3vkl4ixBAUR4kYjoDo4GMBiiBNm7/fCRQgVjEhCAqxYQgO5+eEaIQkhD/OEISBc2b+1T86fxiV29du9vmYQiidf2Y/O38Mi4whAV+MiWEIEiRh4eHyiwgWMN+zq/8Ar/8AqkhhCBFU9bxHyjl3RYQEaA3Hv/lFhAI1YQgKfpHr590IQEX6x3n5whJCwhCQP//Z"
                  style={{ height: "25rem", objectFit: "cover" }}
                  alt=""
                  className="img-fluid"
                />

                <p className="card-text">
                  Angular is an application-design framework and development
                  platform for creating efficient and sophisticated single-page
                  apps.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=QDFiIGTDM6k"
                  className="btn btn-primary"
                >
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default Scratch;
