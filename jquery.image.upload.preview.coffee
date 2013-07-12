(($) ->
	$["fn"]["uploadPreview"] = (o) ->
		o = $["extend"] {
			# будем пропускать только картинки
			"types": [
				"image/jpeg" #джипеги
				"image/png" #пнгшки
				"image/gif" #гифки
				"image/vnd.microsoft.icon" #фавиконки (почему бы и нет?)
			]
			'callback': ->
			},o
		this["each"] ->
			wrapper = $("<span>")
			before = $("<span>")
			after = $("<span>")
			$(this)["wrap"] wrapper
			$(this)["before"](before)
			$(this)["after"](after)
			$(this)["on"] "change", ->
				obj = []
				obj["target"] = $(this)
				obj["wrapper"] = wrapper
				obj["before"] = before
				obj["after"] = after

				if this.files and this.files[0] and (this.files[0].type in o.types)
					reader = new FileReader()
					reader.onload = (e) ->
						img = new Image()
						img.onload = ->
							o["callback"] obj
						img.src = e.target.result
						obj["img"] = img
					reader.readAsDataURL this.files[0]
				else
					o["callback"] obj
			# firefox, например, запоминает выбраный файл
		$(this)["trigger"] "change"
				
		this
	this
)(jQuery)