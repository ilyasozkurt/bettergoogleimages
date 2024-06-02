const sizes = [
    {value: '', label: 'any_size'},
    {value: 'custom', label: 'custom'},
    {value: 'l', label: 'large'},
    {value: 'm', label: 'medium'},
    {value: 'i', label: 'small'},
    {value: 'qsvga', label: 'Min 400×300'},
    {value: 'vga', label: 'Min 640×480'},
    {value: 'svga', label: 'Min 800×600'},
    {value: 'xga', label: 'Min 1024×768'},
    {value: '2mp', label: 'Min 2MP'},
    {value: '4mp', label: 'Min 4MP'},
    {value: '6mp', label: 'Min 6MP'},
    {value: '8mp', label: 'Min 8MP'},
    {value: '10mp', label: 'Min 10MP'},
    {value: '12mp', label: 'Min 12MP'},
    {value: '15mp', label: 'Min 15MP'},
    {value: '20mp', label: 'Min 20MP'},
    {value: '40mp', label: 'Min 40MP'},
    {value: '70mp', label: 'Min 70MP'},
];

const ratios = [
    {value: '', label: 'any_ratio'},
    {value: 't|xt', label: 'tall'},
    {value: 's', label: 'square'},
    {value: 'w', label: 'wide'},
    {value: 'xw', label: 'extra_wide'},
];

const colors = [
    {value: "", label: 'any_color'},
    {value: "color", label: 'full_color'},
    {value: "gray", label: 'black_and_white'},
    {value: "trans", label: 'transparent'},
    {value: "red", label: 'red'},
    {value: "orange", label: 'orange'},
    {value: "yellow", label: 'yellow'},
    {value: "green", label: 'green'},
    {value: "teal", label: 'teal'},
    {value: "blue", label: 'blue'},
    {value: "purple", label: 'purple'},
    {value: "pink", label: 'pink'},
    {value: "white", label: 'white'},
    {value: "gray", label: 'gray'},
    {value: "black", label: 'black'},
    {value: "brown", label: 'brown'},
];

const types = [
    {value: "", label: 'any_type'},
    {value: "face", label: 'face'},
    {value: "photo", label: 'photo'},
    {value: "clipart", label: 'clip_art'},
    {value: "lineart", label: 'line_art'},
    {value: "animated", label: 'animated'},
];

const fileTypes = [
    {value: "", label: 'any_extension'},
    {value: "jpg", label: "JPG"},
    {value: "gif", label: "GIF"},
    {value: "png", label: "PNG"},
    {value: "bmp", label: "BMP"},
    {value: "svg", label: "SVG"},
    {value: "webp", label: "WEBP"},
    {value: "ico", label: "ICO"},
    {value: "raw", label: "RAW"},
];

const licenses = [
    {value: "", label: 'any_license'},
    {value: "cl", label: 'license_cl'},
    {value: "ol", label: 'license_ol'},
];

export {sizes, ratios, colors, types, fileTypes, licenses};
