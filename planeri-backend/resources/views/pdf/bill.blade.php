<!DOCTYPE html>
<html>

<head>
    <title>Hi</title>
    <style>
        .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .items {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .item-row {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .total {
            display: flex;
            width: 100%;
            justify-content: center;

            border-top: 1px solid #000;
            padding: 5px 0;
            margin-top: 20px;
            font-size: 24px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="items">
            @foreach ($items as $item)
            <div class="item-row">
                <p>{{ $item['name'] }}</p>
                <p>{{ $item['price'] }}</p>
            </div>
            @endforeach
        </div>
        <div class="total">
            <h1>Total: {{ $price }}</h1>
        </div>
    </div>

</body>

</html>