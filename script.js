// nodes
const counterContainerEl = document.querySelector("#counter-container");
const addCounterContainerEl = document.querySelector("#add-counter-container");
const resetCounterContainerEl = document.querySelector(
    "#reset-counter-container"
);

// event listener for add counter button
addCounterContainerEl.onclick = () => {
    const elArray = counterContainerEl.children;
    const template = counterContainerEl.innerHTML;

    // update
    counterContainerEl.innerHTML =
        template +
        `
            <div
                class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow my-5"
                >
                    <div id="count${
                        elArray.length + 1
                    }-value" class="text-2xl font-semibold">
                        0
                    </div>
                    <div class="flex space-x-3">
                        <button
                            id="increment${elArray.length + 1}"
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                        >
                            Increment (+${randomInc})
                        </button>
                        <button
                            id="decrement${elArray.length + 1}"
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                        >
                            Decrement (-${randomDec})
                        </button>
                    </div>
                </div>
                `;
};
