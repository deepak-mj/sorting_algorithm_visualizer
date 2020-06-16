function run_mergesort(original_array){
    var working_array = copy_array(original_array);
    var frames = [copy_array(working_array)];
    function mergesort(start, end){
        if (start == end){
            return working_array[start]
        } else {
            var midpoint = Math.floor((start + end) / 2);
            mergesort(start, midpoint);
            mergesort(midpoint + 1, end);
            color_range(working_array, start, midpoint, "#FF0000");
            color_range(working_array, midpoint + 1, end, "#0000FF");
            frames.push(copy_array(working_array));
            var arr = [];
            var k = start;
            var j = midpoint + 1;
            while (k <= midpoint && j <= end){
                var kval, kr, kg, kb;
                [kval, kr, kg, kb] = working_array[k];
                var jval, jr, jg, jb;
                [jval, jr, jg, jb] = working_array[j];
                if(kval <= jval){
                    arr.push(working_array[k]);
                    k += 1;                    
                } else {
                    arr.push(working_array[j]); 
                    j += 1;                                       
                }
            }
            while (k <= midpoint){
                arr.push(working_array[k]);
                k += 1;
            }
            while (j <= end){
                arr.push(working_array[j]);
                j += 1;
            }
            var j = 0;
            for (var k = start; k <= end; k++){
                working_array[k] = arr[j];
                color_index(working_array, k, "#00FF00");
                frames.push(copy_array(working_array));
                j += 1;
            }
            color_range(working_array, start, end, "#000000");
            frames.push(copy_array(working_array));
        }
    }
    mergesort(0, working_array.length - 1);
    var legend = [["Mergesort Legend", "#000000"], ["Left In-Order Partition", "#FF0000"], ["Right In-Order Partition", "#0000FF"], ["Merged In-Order Partition", "#00FF00"]];
    return [frames, legend];
}