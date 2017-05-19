<?php
header('Access-Control-Allow-Origin:*');

echo
'<form action="/Template/Copy/f4f4557c6975444984f2ba579e19c4d3" class="form-horizontal" data-ajax="true" data-ajax-method="Post" data-ajax-success="Success" id="form0" method="post" role="form">    <input type="hidden" name="opType" value="4" />
<input id="SourceTemplateId" name="SourceTemplateId" type="hidden" value="f4f4557c6975444984f2ba579e19c4d3" />    <div class="form-horizontal">


        <div class="form-group">
            <label class="control-label col-md-2" for="SourceTemplateName">源模板</label>
            <div class="col-md-10">
                H5汉庭优佳（7icon）
            </div>
        </div>

        <div class="form-group">
            <label class="control-label col-md-2" for="Name">模板名称</label>
            <div class="col-md-10">
                <input class="form-control text-box single-line" data-val="true" data-val-required="模板名称不能为空！" id="Name" name="Name" type="text" value="" />
                <span class="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>
            </div>
        </div>

    </div>
</form>';
?>
