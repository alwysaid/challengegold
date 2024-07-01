let toolbarOptions = [
    ['bold', 'italic','underline', 'strike'],

    [{header:[1,2,3,4,5,6,false]}],

    [{ list: 'ordered' }, { list: 'bullet' }],

    [{indent:"+1"}, {indent:'-1'}]

    [{align:[]}]

    ['image', 'link', 'video', 'formula']

    [{color:[]}, {background:[]}] 
]

let quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });